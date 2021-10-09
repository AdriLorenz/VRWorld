import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProductsComponent } from './views/products/products.component';
import { LoginComponent } from './views/login/login.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadScriptsService } from './shared/services/load-scripts.service';
import {MatButtonModule} from '@angular/material/button';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SlideshowComponent } from './shared/slideshow/slideshow.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { LogedUserComponent } from './views/loged-user/loged-user.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutUsComponent,
    ContactComponent,
    ProductsComponent,
    LoginComponent,
    PageNotFoundComponent,
    SlideshowComponent,
    LogedUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoadScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
