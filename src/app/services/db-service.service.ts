import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private db: AngularFirestore) { }

  customers: Customer[] =[]

  addCustomer(customer: Customer){
    const docRef=this.db.firestore.collection("customers").doc()
    customer.id=docRef.id
    return docRef.set(customer.toFirestore(),{merge: true})

  
  }

  getAllCustomer(){
    return new Promise(async (resolve, reject) => {
      if (this.customers.length>0) {
        resolve(this.customers)
        return
      }
      this.db.firestore.collection("customers").onSnapshot((querySnapshot) => {
        this.customers=[]
        querySnapshot.forEach((doc) => {
          this.customers.push(new Customer().fromFirestore(doc));
          
        });
        resolve(this.customers)

    });
})


  }
}



