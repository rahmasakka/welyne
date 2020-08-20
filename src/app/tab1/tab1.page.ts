import { Component, OnInit } from '@angular/core';
import { CartService } from '../test/cart.service';
import { Router } from '@angular/router';
import { CathegoriesService } from '../services/cathegories.service';
import { DealsService } from '../services/deals.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{

  cathegories = [];
  items = [];
  deals=[];

  sliderConfig={
    spaceBetween : 7,
    centeredSlides:false,
    slidesPerView: 5
  }
  
  sliderConfig2={
    spaceBetween : 2,
    centeredSlides:false,
    slidesPerView: 1.2
  }
  
  constructor(private cathegoriesService: CathegoriesService, private router:Router, private dealService: DealsService) { }

  ngOnInit() {
   // this.cathegories = this.cathegoriesService.getCart();
    this.items = this.cathegoriesService.getProducts();
    this.deals= this.dealService.getDeals();
  }
/*
  openCart(){
    this.router.navigate(['cart'])
  }*/
}