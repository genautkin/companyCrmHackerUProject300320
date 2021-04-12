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
    docRef.set(customer.toFirestore(),{merge: true})
  .then((docRef) => {
      console.log("Document written with ID: ", docRef);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  }
}
