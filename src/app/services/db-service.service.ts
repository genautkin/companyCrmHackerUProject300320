import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private db: AngularFirestore) { }

  addCustomer(customer: Customer){
    const docRef=this.db.firestore.collection("customers").doc()
    customer.id=docRef.id
    return docRef.set(customer.toFirestore(),{merge: true})
  
  }
}
