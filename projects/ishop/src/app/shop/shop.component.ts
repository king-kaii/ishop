import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
     public Products:any[] = [];

     ngOnInit(): void {
       fetch("http://fakestoreapi.com/products")
       .then(response=>response.json())
       .then(data =>{
        this.Products = data;
       })
     }
}
