export class Customer{
    /*private _firstName:string;
    private _lastName:string;

    constructor(theFirst:string,theLast:string){
        this._firstName=theFirst;
        this._lastName=theLast;
    }*/
    //Above code is correct but boilerplate. Below is shortcut method to do the same thing
    constructor(private _firstName: string,
        private _lastName: string
    ){}


    get firstName(): string{
        return this._firstName;
    }
    set firstName(value:string){
        this._firstName=value;
    }
    get lastName(): string{
        return this._lastName;
    }
    set lastName(value:string){
        this._lastName=value;
    }
}

/*let myCustomer=new Customer("James","May");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);*/