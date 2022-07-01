import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogedin=false
  constructor() { }

  login(username:string, password:string){
    console.log(username,password)
    this.isLogedin = true
  }
}
