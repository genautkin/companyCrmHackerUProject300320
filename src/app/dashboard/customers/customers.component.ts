import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { DbServiceService } from 'src/app/services/db-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements AfterContentInit {

  

  constructor(private ds:DbServiceService,private spinner:SpinnerService) {
    
  }
  ngAfterContentInit(): void {
    this.getAllCustomers()
  }

  customers: Customer[] =[]

  ngOnInit(): void {
    
  }


  getAllCustomers(){
    this.spinner.showOrHideSpinner(true)
    this.ds.getAllCustomer().then((arr:Customer[])=>{
      this.customers=arr
      this.spinner.showOrHideSpinner(false)
    }).catch((err)=>{
      console.log(err)
    })
  }

}
