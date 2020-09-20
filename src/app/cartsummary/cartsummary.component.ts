import { Component, OnInit } from '@angular/core';
import {Cart} from 'src/app/store/Cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: './cartsummary.component.html',
  styleUrls: ['./cartsummary.component.css']
})
export class CartsummaryComponent implements OnInit {

  constructor(public cart: Cart ) { }

  ngOnInit(): void {
  }

}
