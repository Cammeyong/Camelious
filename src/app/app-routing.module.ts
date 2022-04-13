import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { HairComponent } from './hair/hair.component';
import { MakeupComponent } from './makeup/makeup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:'contactUs', component:ContactUsComponent},
  {path:"register", component:RegisterComponent},
  {path:'jewelry', component:JewelryComponent},
  {path:"hair", component:HairComponent},
  {path:"makeup", component:MakeupComponent},
  {path:"about us", component:AboutUsComponent},
  {path:"cart", component:CartComponent},
  {path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
