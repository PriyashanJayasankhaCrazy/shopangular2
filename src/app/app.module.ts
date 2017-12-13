import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BasketService } from './basket.service';
import { DeliverersService } from './deliverers.service';
import { BasketComponent } from './basket/basket.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { DataComponent } from './data/data.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentService } from './payment.service';
const appRoutes:Routes = [
  {path: '', component: ProductsComponent},
  {path: 'koszyk', component: BasketComponent},
  {path: 'dane', component: DataComponent},
  {path: 'payment', component: PaymentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    NavComponent,
    ProductsComponent,
    DataComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BasketService, DeliverersService, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
