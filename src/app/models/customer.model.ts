

export class Customer {
    firstName:string="";
    lastName:string=""
    email:string=""
    phoneNumber:string=""
    address:string=""
    notes:string=""
    private _id:string=""
    toFirestore():any{
        return {
            firstName:this.firstName,
            lastName:this.lastName,
            email:this.email,
            phoneNumber:this.phoneNumber,
            address:this.address,
            notes:this.notes,
            id:this._id
        }
    }
    constructor(
    id:string='',
    firstName:string="",
    lastName:string="",
    email:string="",
    phoneNumber:string="",
    address:string="",
    notes:string=""){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.address=address;
        this.notes=notes

    }

    fromFirestore(doc):Customer{
   
        return new Customer(doc.id,
            doc.data().firstName,
            doc.data().lastName,
            doc.data().email,
            doc.data().phoneNumber,
            doc.data().address,
            doc.data().notes
            )
    }

    get id(): string {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }

}  