import { Cart } from 'src/app/store/Cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Order
{
    public id : number;
    public name : string;
    public address : string;
    public city : string;
    public state : string;
    public country : string;
    public zip : string;
    public shipped : boolean;


    constructor(public cart: Cart)
    {}

    clear()
    {
        this.id=null;
        this.name=null;
        this.address=null;
        this.city=null;
        this.state=null;
        this.country=null;
        this.zip=null;
        this.shipped=false;

        this.cart.clear();
    }
}
