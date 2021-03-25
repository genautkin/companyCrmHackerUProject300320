import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginServ:LoginService) { }

  ngOnInit(): void {
  }
  check:boolean =true;
  errorMessage=''


  login(email: string, password: string){
    this.loginServ.loginWithEmailPassword(email,password).catch((err)=>{
      this.errorMessage=err
    })
  }

}
