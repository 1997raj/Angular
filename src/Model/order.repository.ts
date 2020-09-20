import {Injectable} from '@angular/core';
import {Order} from './order.model';
import {StaticDatasource} from './static.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository
{
    public order : Order[] = [];

    constructor(private datasource : StaticDatasource)
    {}

    getOrder() : Order[]
    {
        return this.order;
    }

    saveOrder(order : Order) : Observable<Order>
    {
        return this.datasource.saveOrder(order);
    }
}