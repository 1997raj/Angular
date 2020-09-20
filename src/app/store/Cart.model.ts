import { Injectable } from '@angular/core';
import { Product } from 'src/Model/product.model';

@Injectable()
export class Cart
{
    public Lines : CartLines[]=[];
    public itemCount : number=0;
    public price : number=0;

    addLine(product: Product, quantity: number=1)
    {
        let line= this.Lines.find(line=>line.product.id == product.id);
        if(line!=undefined)
        {
            line.quantity+=Number(quantity);
        }
        else
        {
            this.Lines.push(new CartLines(product,quantity));
        }
        this.calculateCart();
    }

    updateLine(product : Product, quantity:number)
    {
        let line=this.Lines.find(line=>line.product.id==product.id);
        if(line!=undefined)
        {
            line.quantity=Number(quantity);
        }
        this.calculateCart();
    }

    removeLine(id : number)
    {
        let index=this.Lines.findIndex(line=>line.product.id==id);
        this.Lines.splice(index,1);
        this.calculateCart();
    }

    clear()
    {
        this.Lines=[];
        this.itemCount=0;
        this.price=0;
    }

    private calculateCart()
    {
        this.itemCount=0;
        this.price=0;

        this.Lines.forEach(l=>
            {
                this.itemCount += l.quantity;
                this.price += (l.product.price*l.quantity);
            })
    }
}

export class CartLines
{

    constructor(public product: Product, public quantity: number)
    {}

    get lineTotal() :number
    {
        return this.quantity * this.product.price;
    }
}
