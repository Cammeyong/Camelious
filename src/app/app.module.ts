import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HairComponent } from './hair/hair.component';
import { MakeupComponent } from './makeup/makeup.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NextDirective } from './next.directive';
import { PreviousDirective } from './previous.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SliderComponent } from './slider/slider.component';
import { TopSelectionComponent } from './top-selection/top-selection.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { PartnersBrandComponent } from './partners-brand/partners-brand.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HairComponent,
    MakeupComponent,
    JewelryComponent,
    ContactUsComponent,
    AboutUsComponent,
    NextDirective,
    PreviousDirective,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
    TopSelectionComponent,
    FilterPipe,
    SortPipe,
    PartnersBrandComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


