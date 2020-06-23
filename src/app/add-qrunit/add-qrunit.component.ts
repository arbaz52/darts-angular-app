import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-add-qrunit',
  templateUrl: './add-qrunit.component.html',
  styleUrls: ['./add-qrunit.component.css']
})
export class AddQrunitComponent implements OnInit {
  name: string = "";

  person: {
    fullName: string,
    gender: string,
  } = {
      fullName: "",
      gender: "",
    }
  people = []

  col = ["ID", "Full Name", "Gender", "Picture", "Actions"]
  members = []
  qrunit: {
    name: string,
    members: any[]
  } = {
    name: "",
    members: []
  }

  removeMember = (i, member) => {
    var m = this.members.splice(i, 1)
    this.people.push(m[0])
  }


  uploader: FileUploader;
  constructor(private adminService: AdminService,private router: Router, private toaster:ToasterService) { }
  ngOnInit() {

    this.uploader = new FileUploader({
      url: "http://localhost:3000/admin/qrunit/person/",
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
    this.adminService.getAvailablePeople().subscribe((data: any) => {
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



  addAsMember = (p, i) => {
    this.members.push(p)
    this.people.splice(i, 1)
    console.log(i)
  }


  addQRUnit = () => {
    this.qrunit.members = []
    for(var i = 0; i < this.members.length; i++){
      // this.qrunit.members.push({
      //   personId: this.members[i]._id
      // })
      this.qrunit.members.push(this.members[i]._id)
    }
    this.adminService.addQRUnit(this.qrunit).subscribe(
      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ) {
          this.toaster.succ(data.succ.message)
          this.router.navigate(["admin/qrunit/authenticate/" + data.auth_id])
        }
      },
        (err: any) => {
          this.toaster.err(err)
        },
        () => {
  
        }
    )
  }
}
