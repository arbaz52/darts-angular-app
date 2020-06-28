import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }
  err = (msg) => {
    if (msg.message)
      msg = msg.message
    this.toastr.error(msg, "Error")
  }
  succ = (msg) => {
    if (msg.message)
      msg = msg.message
    this.toastr.success(msg, "Success")
  }
  info = (msg) => {
    if (msg.message)
      msg = msg.message
    this.toastr.info(msg, "Information")
  }
}
