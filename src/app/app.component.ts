import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginService } from './services/login.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'companyCrm';
  showSpinner:boolean = false;
  constructor(private spinnerSer:SpinnerService ) { 
  }

  ngOnInit(): void {
    this.spinnerSer.spinnerStatus.subscribe((val)=>{
      this.showSpinner=val})
  }
    
}
