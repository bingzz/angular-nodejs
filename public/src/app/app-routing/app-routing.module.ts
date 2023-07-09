import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { FoodDetailsComponent } from '../pages/food-details/food-details.component';
import { CartPageComponent } from '../pages/cart-page/cart-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:keyword', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:foodID', component: FoodDetailsComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
