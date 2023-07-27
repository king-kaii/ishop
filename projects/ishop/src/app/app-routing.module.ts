import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CatalogComponent } from './catalog/catalog.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { LoginerrorComponent } from './loginerror/loginerror.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "shop", component: ShopComponent},
  {path: "catalog", component: CatalogComponent},
  {path: "kids", component: KidsComponent},
  {path: "mens", component: MensComponent},
  {path: "women", component: WomenComponent},
  {path: "login", component: LoginComponent},
  {path: "loginerror", component: LoginerrorComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
