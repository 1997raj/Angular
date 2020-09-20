import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/store/Cart.model';

@Component({
  templateUrl: './cart-details.component.html',
 })
export class CartDetailsComponent implements OnInit {

  constructor(public cart : Cart) { }

  ngOnInit(): void {
  }

}
