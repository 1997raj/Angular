import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from './store/store.module';
import { StoreComponent } from 'src/app/store/store.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreFirstGuard } from './storeFirst.guard';
import {AdminModule} from './Admin/admin.module';

const routes: Routes = [
  {
    path:"store",
    component:StoreComponent,
    canActivate:[StoreFirstGuard]
  },
  {
    path:"cart",
    component:CartDetailsComponent,
    canActivate:[StoreFirstGuard]
  },
  {
    path:"checkout",
    component:CheckoutComponent,
    canActivate:[StoreFirstGuard]
  },
  {
    path:"admin",
    loadChildren:"AdminModule",    
    canActivate:[StoreFirstGuard]
  },
  {
    path:"**",
    component:StoreComponent
  }
];

@NgModule({
  imports: [BrowserModule,StoreModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[StoreFirstGuard]
})
export class AppRoutingModule { }
