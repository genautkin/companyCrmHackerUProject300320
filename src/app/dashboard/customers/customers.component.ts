import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { DbServiceService } from 'src/app/services/db-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements AfterContentInit {

  

  constructor(private ds:DbServiceService,private spinner:SpinnerService,private router:Router,private route: ActivatedRoute) {
    
  }
  ngAfterContentInit(): void {
    this.getAllCustomers()
  }

  customersArrayData: Customer[] =[]
  customers: Customer[] =[]
  ngOnInit(): void {
    
  }

  showCustomer(customer: Customer){
      const custerId = customer.id
      this.router.navigate([ custerId],{ relativeTo: this.route });
  }

  searchChanged(str:string){
    str=str.toLowerCase()
    this.customers=new Customer().searchInCustomersArray(this.customersArrayData,str)

  }


  getAllCustomers(){
    this.spinner.showOrHideSpinner(true)
    this.ds.getAllCustomer()
    .then(()=>{
      this.spinner.showOrHideSpinner(false)
    }).catch((err)=>{
      console.log(err)
    })
    this.ds.customersStatus.subscribe((arr:Customer[])=>{
      this.customersArrayData=arr
      this.searchChanged('')
    })
  }

  remove(e,customer: Customer){
    const custerId = customer.id
    this.ds.removeCustomer(custerId)
    e.stopPropagation();
    
    setTimeout(() => {
      this.getAllCustomers();
    }, 1000);
  }

}
