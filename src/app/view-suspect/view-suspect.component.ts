import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthoritativeService } from '../authoritative.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-view-suspect',
  templateUrl: './view-suspect.component.html',
  styleUrls: ['./view-suspect.component.css']
})
export class ViewSuspectComponent implements OnInit {
  tags: string;
  suspect: {
    _id: string,
    fullName: string,
    gender: string,
    pictures: [],
    tags: []
  } = {
      _id: "",
      fullName: "",
      gender: "",
      pictures: [],
      tags: []
    }
  suspectId: string;

  uploader: FileUploader;
  constructor(private authoritativeService: AuthoritativeService, private activatedRoute: ActivatedRoute) {
    

  }

  uploadFiles = () => {
    this.uploader.uploadAll()
    alert("pictures are being uploaded")
  }

  ngOnInit() {

    this.suspectId = this.activatedRoute.snapshot.paramMap.get("suspectId")
    this.uploader = new FileUploader({
      url: "http://localhost:3000/authoritative/suspects/"+this.suspectId+"/picture",
      method: "PUT",
      itemAlias: "picture"
    });
    this.uploader.response.subscribe(
      (data) => {
        data = JSON.parse(data)
        if (data.err) {
          alert(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.suspect = data.suspect
        }
      },
      (err) => {
        alert(err)
      },
      () => {
        
      }
    )
    this.authoritativeService.getSuspect(this.suspectId).subscribe(

      (data: any) => {
        if (data.err) {
          alert(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.suspect = data.suspect
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
