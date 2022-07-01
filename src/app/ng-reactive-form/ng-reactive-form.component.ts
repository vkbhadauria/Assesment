import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ng-reactive-form',
  templateUrl: './ng-reactive-form.component.html',
  styleUrls: ['./ng-reactive-form.component.css']
})
export class NgReactiveFormComponent implements OnInit {
  signupform: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupform=new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'username': new FormControl(null, Validators.required),
      'secret': new FormControl("pet"),
      'questionAnswer': new FormControl(null)

    })
  }
  onSubmit(){
    console.log(this.signupform)
  }
}
