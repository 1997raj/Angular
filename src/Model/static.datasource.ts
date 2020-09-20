import {Product} from './product.model';
import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Order} from './order.model';
import { formatCurrency } from '@angular/common';

@Injectable()
export class StaticDatasource
{
    private products : Product[] = [
        new Product(1,"Reebock","Shoes","Casual shoe", 2500),
        new Product(2,"Adidas","Shoes","Sport Shoe", 3500),
        new Product(3,"Cake","Food","Quality cake", 250),
        new Product(4,"Bournville","Food","Dark Chocolate", 100),
    ];

    getProduct() : Observable<Product[]>{
        return from([this.products]);
    }

    saveOrder(order: Order) : Observable<Order>
    {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}