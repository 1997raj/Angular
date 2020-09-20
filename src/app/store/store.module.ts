import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';
import { ModelModule } from 'src/Model/Model.module';
import { CartsummaryComponent } from 'src/app/cartsummary/cartsummary.component';
import { CartDetailsComponent } from 'src/app/cart-details/cart-details.component';
import { CheckoutComponent } from 'src/app/checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
      StoreComponent,
      CartsummaryComponent,
      CartDetailsComponent,
      CheckoutComponent,
    ],
    imports: [
      BrowserModule,
      ModelModule,
      FormsModule,
      RouterModule
    ],
    exports: [
        StoreComponent,CartDetailsComponent,CheckoutComponent
    ]
  })
  export class StoreModule { }
