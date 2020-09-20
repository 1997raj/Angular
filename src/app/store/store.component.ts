import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/Model/product.repository'
import {Product} from 'src/Model/product.model';
import {Cart} from 'src/app/store/Cart.model';
import { Router } from '@angular/router'

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  selectedCategory: string = null;
  productPerPage: number = 4;
  selectedPage: number = 1;

  constructor(private repository : ProductRepository, private cart : Cart, private router: Router) { }

  ngOnInit(): void {
  }

  get Products(): Product[] {
    let pageIndex: number =(this.selectedPage-1)*(this.productPerPage);
    return this.repository.getProducts(this.selectedCategory).slice(pageIndex,pageIndex+this.productPerPage);
  }

  get Categories() : string[]{
    return this.repository.getCategories();
  }

  changeCategory(selected? : string)
  {
    this.selectedCategory=selected;
  }

  changePage(page : number)
  {
    this.selectedPage=page;
  }

  changePageSize(newSize : number)
  {
    this.productPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers(): number[]
  {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productPerPage)).fill(0).map((x,i)=>i+1);
  }

  addProductInCart(product: Product)
  {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }
}
