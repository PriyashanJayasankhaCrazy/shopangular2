import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private basketService: BasketService){}

  ngOnInit(){}
  
    products = [
      {id: 1, name: 'Spodnie', price: 20.00},
      {id: 2, name: 'Bluzka', price: 10.00},
      {id: 3, name: 'Kurtka', price: 30.00}
    ];
  
    addToBasket(product){
      this.basketService.add(product);
      console.log('OK');
    }
  
    showBasket(){
      let basket = this.basketService.get();
      console.log(basket);
    }

}
