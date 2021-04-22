import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  

  constructor(private db: AngularFirestore) { }

  customers: Customer[] =[]
  customersStatus = new BehaviorSubject<Customer[]>([]);


 


  addCustomer(customer: Customer,id:string=""){
    let docRef
    if (customer.id==="") {
       docRef=this.db.firestore.collection("customers").doc()
      customer.id=docRef.id
    }else {
       docRef=this.db.firestore.collection("customers").doc(customer.id)
    }
    
    return docRef.set(customer.toFirestore(),{merge: true})

  
  }

  removeCustomer(custerId: string) {
    this.db.firestore.collection("customers").doc(custerId).delete()
  }

  getAllCustomer(){
    return new Promise<boolean>(async (resolve, reject) => {
      if (this.customers.length>0) {
        this.customersStatus.next(this.customers)
        resolve(true)
        return
      }
      this.db.firestore.collection("customers").onSnapshot((querySnapshot) => {
        this.customers=[]
        querySnapshot.forEach((doc) => {
          this.customers.push(new Customer().fromFirestore(doc));
       
        });
        this.customersStatus.next(this.customers)
        resolve(true)

    });
})

    
  }

  getCustomer(id:string){
    return new Promise<Customer>(async (resolve, reject) => {
      let obj = this.customers.find(o => o.id === id );
      if (obj){
        resolve(obj)
        return ;
      }
      this.db.firestore.collection("customers").doc(id).get().then((doc) => {
          if (doc.exists) {
              resolve(new Customer().fromFirestore(doc))
          } else {
              resolve(null)
          }
      }).catch((error) => {
          reject( error);
      });

  
    
    })
 
     
      
  }




}



