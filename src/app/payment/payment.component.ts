import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentService } from '../payment.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  trgroups;
  constructor(private paymentService: PaymentService, private http: HttpClient, private basketService: BasketService) { }

  ngOnInit() {
    this.trgroups = this.paymentService.getTrGroups();
  }

  submit(form) : void {
    let body = {
      kwota: this.basketService.getFullPrice(),
      opis: 'zamowienie',
      email: 'user@gmail.com',
      nazwisko: "full name",
      grupa: form.value.trgroups
    }
    this.http.post('https://secure.tpay.com', body).subscribe();
   }
}