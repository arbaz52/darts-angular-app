import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AuthoritativeService } from '../authoritative.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  priv: any[] = [{
    name: "manage servers",
    checked: false
  }, {
    name: "manage cameras",
    checked: false
  }]
  person: {
    fullName: string,
    gender: string,
  } = {
      fullName: "",
      gender: "",
    }



  name: string = "";


  admin: {
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
  constructor(private authoritativeService: AuthoritativeService, private router: Router) { }

  ngOnInit() {

    this.uploader = new FileUploader({
      url: "http://localhost:3000/authoritative/admin/person/",
      method: "POST",
      itemAlias: "picture"
    });
    this.uploader.response.subscribe(
      (data) => {
        data = JSON.parse(data)
        if (data.err) {
          alert(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.people.push(data.person)
          alert(data.succ.message)
          this.person.fullName = ""
          this.person.gender = ""
          this.selectPerson(data.person, 0);
        }
      },
      (err) => {
        alert(err)
      },
      () => {

      }
    )


    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('person', JSON.stringify(this.person))
    };



    //get all available people
    this.authoritativeService.getAvailablePeopleAdmin().subscribe((data: any) => {
      if (data.err) {
        alert(data.err.message)
      } else if (data.succ) {
        this.people = data.people
      }
    },
      (err: any) => {
        alert(err)
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
      alert("Please provide a picture!")
      return
    }
    this.uploader.uploadAll()
    alert("Please wait!")
  }



  selectPerson = (p, i) => {
    // this.admin.personId = p._id
    // this.people.splice(i, 1)
    this.personSelected = p
    this.admin.personId = p._id
    console.log(i)
  }

  resetSelection = () => {
    this.admin.personId = ""
    // this.people.push(this.personSelected)

  }

  
  addAdmin = () => {
    this.admin.privileges = []
    for (var i = 0; i < this.priv.length; i++) {
      if(this.priv[i].checked){
        this.admin.privileges.push(this.priv[i].name)
      }
    }
    this.authoritativeService.addAdmin(this.admin).subscribe(
      (data: any) => {
        if (data.err) {
          alert(data.err.message)
        } else if (data.succ) {
          alert(data.succ.message)
          this.router.navigate(["authoritative/home/"])
        }
      },
      (err: any) => {
        alert(err)
      },
      () => {

      }
    )
  }
  
}
