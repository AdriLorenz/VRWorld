import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactComponent } from './views/contact/contact.component';
import { LogedUserComponent } from './views/loged-user/loged-user.component';
import { LoginComponent } from './views/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'logedUser', component: LogedUserComponent },

  { path: '', redirectTo: '/aboutUs', pathMatch:'full'},
  { path:'**', component:PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor( router: Router) {
  
  }


}
