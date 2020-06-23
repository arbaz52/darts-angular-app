import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tests-only',
  templateUrl: './tests-only.component.html',
  styleUrls: ['./tests-only.component.css']
})
export class TestsOnlyComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }
  showError(){
    console.log("akert")
    this.toastr.error('Hello world!', 'Toastr fun!');
  }
  showInfo(){
    this.toastr.info('Hello world!', 'Toastr fun!');

  }
  showSuccess(){
    this.toastr.success('Hello world!', 'Toastr fun!');

  }
}
