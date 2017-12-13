import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BasketService } from '../basket.service';

@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private basketService: BasketService, private router:Router){}
  ngOnInit(){
    this.form = this.fb.group({
      podmiot: ['', Validators.required],
      imie: ['', Validators.required],
      nazwisko: ['', Validators.required],
      ulica: ['', Validators.required],
      nrdomu: ['', Validators.required],
      nrlokalu: ['', Validators.required],
      miasto: ['', Validators.required],
      kodpocztowy: ['', Validators.required],
      kraj: ['', Validators.required],
      telefon: ['', Validators.required],
      regulamin: ['', Validators.required]
    })
  }
  submit(){
    this.basketService.addData(this.form.value);
    this.router.navigate(['/payment']);
  }
}
