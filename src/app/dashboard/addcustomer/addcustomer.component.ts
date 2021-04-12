import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { DbServiceService } from 'src/app/services/db-service.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})




export class AddcustomerComponent implements OnInit {
   
  constructor(private ds:DbServiceService) {
   }

   form:Customer=new Customer()
 

  ngOnInit(): void {
    console.log(this.form)
  }


  save(){
    console.log(this.form)
    this.ds.addCustomer(this.form)
  }
}
