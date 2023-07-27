import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopindexComponent } from './shopindex/shopindex.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ShopComponent } from './shop/shop.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { LoginerrorComponent } from './loginerror/loginerror.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopindexComponent,
    CatalogComponent,
    ShopComponent,
    KidsComponent,
    MensComponent,
    WomenComponent,
    NotfoundComponent,
    LoginComponent,
    LoginerrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ShopindexComponent]
})
export class AppModule { }
