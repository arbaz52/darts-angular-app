import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToasterService } from '../toaster.service';
import { FileUploader } from 'ng2-file-upload';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  @Output() personAdded = new EventEmitter<{}>();
  
  @Input()
  toaster: ToasterService
  @Input()
  url: string


  uploader: FileUploader;
  
  person: {
    fullName: string,
    gender: string,
    picture_url: SafeUrl
  } = {
      fullName: null,
      gender: null,
      picture_url: null
    }

  addPerson = () => {
    let shouldAdd: boolean = true
    Object.keys(this.person).forEach(k => {
      if (this.person[k] == null) {
        shouldAdd = false
      }
    })
    if(shouldAdd){
      this.toaster.info("Adding person")
      this.uploader.uploadAll();
    }else{
      this.toaster.err("Please enter all the details!")
    }
  }


  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {


    this.uploader = new FileUploader({
      url: this.url,
      method: "POST",
      itemAlias: "picture",
      headers: [{name:'Accept', value:'application/json'}]
    });
    this.uploader.response.subscribe(
      (data) => {
        try{
        console.log(data)
        data = JSON.parse(data)
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          this.toaster.succ(data.succ)
          let person = data.person
          this.personAdded.emit(person)
        }
      }catch(err){
        this.toaster.err(err)
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


  }

  personPictureSelected(e){
    console.log(e)
    if(e.length > 0){
      this.person.picture_url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(e[0]))
    }else {
      this.person.picture_url = null
    }
  }

  pictureChanged(e){
    console.log(e)
  }

}
