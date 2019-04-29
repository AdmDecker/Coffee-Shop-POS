import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BagelSelectComponent } from './bagel-select/bagel-select.component';
import { BagelComponent } from './bagel/bagel.component';
import { CartComponent } from './cart/cart.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { BagelCustomizeComponent } from './bagel-customize/bagel-customize.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CheckoutComponent } from './checkout/checkout.component';

const appRoutes: Routes = [
  { path: '', component: BagelSelectComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'bagel', component: BagelComponent },
  { path: 'success-screen', component: SuccessScreenComponent },
  { path: 'bagel-customize', component: BagelCustomizeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BagelSelectComponent,
    BagelComponent,
    CartComponent,
    SuccessScreenComponent,
    BagelCustomizeComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    MatButtonModule, MatCheckboxModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
