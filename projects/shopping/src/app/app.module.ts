import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NetflixindexComponent } from './NetflixWebsite/netflixindex/netflixindex.component';
import { NetflixmainComponent } from './NetflixWebsite/netflixmain/netflixmain.component';
import { NetflixheaderComponent } from './NetflixWebsite/netflixheader/netflixheader.component';
import { NetflixfooterComponent } from './NetflixWebsite/netflixfooter/netflixfooter.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NetflixindexComponent,
    NetflixmainComponent,
    NetflixheaderComponent,
    NetflixfooterComponent,
    ShoppingcartComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
