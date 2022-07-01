import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-template-driven-form',
  templateUrl: './ng-template-driven-form.component.html',
  styleUrls: ['./ng-template-driven-form.component.css']
})
export class NgTemplateDrivenFormComponent implements OnInit {
  defaultQuestion="pet"
  answer=''
  @ViewChild('f') signupForm :NgForm;

  constructor() { 
    // this.signupForm=''
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signupForm)
  }
}
