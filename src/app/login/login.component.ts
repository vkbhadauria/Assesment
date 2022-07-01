import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password:ElementRef;
  constructor(private authservice: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  login(){
    if (this.username.nativeElement.value!='vivek'){
        alert(`${this.username.nativeElement.value} is not valid credential Please try with username/password=> vivek/12345`)
    }
    else{
        const uname=this.username.nativeElement.value
      const pass = this.password.nativeElement.value
      this.authservice.login(uname, pass)
      this.route.navigate(['recipe'])
    }
    
  }
}
