import { Injectable } from '@angular/core';

@Injectable()
export class DeliverersService {

  constructor() { }

  deliverers = [
    {name: 'Poczta Polska', price: 10},
    {name: 'Pocztex', price: 20},
    {name: 'Odbiór osobisty', price: 0},
  ]

  get(){
    return this.deliverers;
  }
}
