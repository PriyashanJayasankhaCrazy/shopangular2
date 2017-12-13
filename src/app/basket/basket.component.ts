import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { DeliverersService } from '../deliverers.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket;
  deliverers;
  constructor(private basketService:BasketService, private deliverersService:DeliverersService) { }

  ngOnInit() {
    this.basket = this.basketService.get();
    this.deliverers = this.deliverersService.get();
  }

  addDeliverer(d){
    this.basketService.addDeliverer(d);
  }

}
