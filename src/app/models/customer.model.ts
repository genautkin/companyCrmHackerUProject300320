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
    get id(): string {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }

}  