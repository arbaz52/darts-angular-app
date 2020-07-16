import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AuthoritativeService } from '../authoritative.service';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-add-authoritative',
  templateUrl: './add-authoritative.component.html',
  styleUrls: ['./add-authoritative.component.css']
})
export class AddAuthoritativeComponent implements OnInit {
  isLinear = true;
  privSelected = false;
  updatePriv(i, yn) {
    this.priv[i].checked = yn
    this.privSelected = false
    this.priv.forEach(p => {
      if (p.checked)
        this.privSelected = true
    })
  }
  _p: string[] = ["add admins", "add authoritative people", "manage suspects", "view map"]
  
  priv: any[] = [{
    name: "manage suspects",
    checked: false
  }, {
    name: "view map",
    checked: false
  }
  ]
  person: {
    fullName: string,
    gender: string,
  } = {
      fullName: "",
      gender: "",
    }



  name: string = "";


  ap: {
    email: string,
    personId: string,
    privileges: string[]
  } = {
      email: "",
      personId: "",
      privileges: []
    }

  //available people
  people = []
  personSelected = {}


  uploader: FileUploader;
  constructor(private authoritativeService: AuthoritativeService, private router: Router, private toaster:ToasterService) { }

  ngOnInit() {
    this.priv = []
    this._p.forEach(p => {
      this.priv.push({
        name: p,
        checked: false
      })
    })

    this.uploader = new FileUploader({
      url: "http://localhost:3000/authoritative/admin/person/",
      method: "POST",
      itemAlias: "picture"
    });
    this.uploader.response.subscribe(
      (data) => {
        data = JSON.parse(data)
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.people.push(data.person)
          this.toaster.succ(data.succ.message)
          this.person.fullName = ""
          this.person.gender = ""
          this.selectPerson(data.person, 0);
        }
      },
      (err) => {
        this.toaster.err(err)
      },
      () => {

      }
    )


    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('person', JSON.stringify(this.person))
    };



    //get all available people
    this.authoritativeService.getAvailablePeopleAuthoritative().subscribe((data: any) => {
      if (data.err) {
        this.toaster.err(data.err.message)
      } else if (data.succ) {
        this.people = data.people
      }
    },
      (err: any) => {
        this.toaster.err(err)
      },
      () => {

      })
  }

  personPictureSelected = (file) => {
    console.log("File selected", file)
  }


  addPerson = () => {
    console.log("works")
    if (this.uploader.queue.length <= 0) {
      this.toaster.err("Please provide a picture!")
      return
    }
    this.uploader.uploadAll()
    this.toaster.info("Please wait!")
  }



  selectPerson = (p, i) => {
    // this.admin.personId = p._id
    // this.people.splice(i, 1)
    this.personSelected = p
    this.ap.personId = p._id
    console.log(i)
  }

  resetSelection = () => {
    this.ap.personId = ""
    // this.people.push(this.personSelected)

  }


  addAp = () => {
    this.ap.privileges = []
    for (var i = 0; i < this.priv.length; i++) {
      if (this.priv[i].checked) {
        this.ap.privileges.push(this.priv[i].name)
      }
    }
    this.authoritativeService.addAp(this.ap).subscribe(
      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ) {
          this.toaster.succ(data.succ.message)
          this.router.navigate(["authoritative/home/"])
        }
      },
      (err: any) => {
        this.toaster.err(err)
      },
      () => {

      }
    )
  }

  
  personAdded(person) {
    this.people.push(person)
    this.selectPerson(person, 0);
  }

}
