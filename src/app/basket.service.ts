import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BasketService {

  constructor(private http:HttpClient) { }

  basket = {
    card: [],
    subject: {},
    deliverer: {name: 'Poczta Polska', price: 10}
  };

  add(product){
    let isExists = false;
    for(let i in this.basket.card){
      if(this.basket.card[i].id === product.id){
        this.basket.card[i].qty++;
        isExists = true;
      }
    }
    if(!isExists){
      let newProduct = {...product, qty: 1};
      this.basket.card.push(newProduct);
    }
  }

  get(){
    return this.basket.card;
  }

  clear(){
    this.basket.card = [];
  }

  remove(id){
    let newBasket = this.basket.card.filter((product)=>{
      return product.id !== id;
    });
    this.basket.card = newBasket;
  }

  getFullPrice(){
    let result;
    this.basket.card.forEach((item)=>{
      result += item.price * item.qty;
    })
    result = result + this.basket.deliverer.price;
    return result;
  }

  addData(obj){
    this.basket.subject = obj;
  }

  returnAll(){
    return this.basket;
  }

  returnSubject(){
    return this.basket.subject;
  }

  addDeliverer(d){
    this.basket.deliverer = d;
  }

  sendOrder(){
    this.http.post('http://localhost:3000/order', this.basket,).subscribe(()=>{
      console.log("Wysłano");
    })
  }
}
