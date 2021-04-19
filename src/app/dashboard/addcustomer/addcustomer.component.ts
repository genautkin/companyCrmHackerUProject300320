import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { DbServiceService } from 'src/app/services/db-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})




export class AddcustomerComponent implements OnInit {
   
  constructor(private ds:DbServiceService,private spinner:SpinnerService,private route: ActivatedRoute,private router: Router) {
   }

   form:Customer=new Customer()
 

  ngOnInit(): void {
    console.log(this.form)
  }


  save(){
    console.log(this.form)
    this.spinner.showOrHideSpinner(true)
    this.ds.addCustomer(this.form).then((docRef) => {
      this.spinner.showOrHideSpinner(false)
      this.form=new Customer()
      // this.router.navigate(['../'], { relativeTo: this.route });
    })
    .catch((error) => {
        this.spinner.showOrHideSpinner(false)
        console.error("Error adding document: ", error);
    });
  }
}
