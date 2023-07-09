import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './common/search/search.component';
import { TagsComponent } from './common/tags/tags.component';
import { FoodDetailsComponent } from './pages/food-details/food-details.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { TitleComponent } from './common/title/title.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './common/input-container/input-container.component';
import { InputValidationComponent } from './common/input-validation/input-validation.component';
import { TextInputComponent } from './common/text-input/text-input.component';
import { DefaultButtonComponent } from './common/default-button/default-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodDetailsComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
