import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }
  err = (msg) => {
    this.toastr.error(msg, "Error")
  }
  succ = (msg) => {
    this.toastr.success(msg, "Success")
  }
  info = (msg) => {
    this.toastr.info(msg, "Information")
  }
}
