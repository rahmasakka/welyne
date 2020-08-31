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
  
  slide=document.getElementById('slide1');
  taille =window.innerWidth;

  cathegories = [];
  items = [];
  deals=[];
  dealSpecial=[];

  
  sliderConfig={
    spaceBetween : 2,
   // centeredSlides:false,
    slidesPerView: 4.5
  }
  
  sliderConfig2={
    spaceBetween : 3,
    //centeredSlides:false,
    slidesPerView: 3.2
  }
  
  constructor(private cathegoriesService: CathegoriesService, private router:Router, private dealService: DealsService) {
    
    if (this.taille<600){
      this.sliderConfig={
        spaceBetween : 5,
        //centeredSlides:false,
        slidesPerView: 3.5
      }

      this.sliderConfig2={
        spaceBetween : 1,
        //centeredSlides:false,
        slidesPerView: 1.2
      }
    }
    else if (this.taille<900){
      this.sliderConfig={
        spaceBetween : 5,
        //centeredSlides:false,
        slidesPerView: 4.5
      }

      this.sliderConfig2={
        spaceBetween : 1,
        //centeredSlides:false,
        slidesPerView: 2.2
      }
    }
    else if(this.taille<1000){
      this.sliderConfig={
        spaceBetween : 5,
        //centeredSlides:false,
        slidesPerView: 5.5
      }
      this.sliderConfig2={
        spaceBetween : 1,
        //centeredSlides:false,
        slidesPerView: 3.2
      }
    }

     
  }

  ngOnInit() {
   // this.cathegories = this.cathegoriesService.getCart();
    this.items = this.cathegoriesService.getProducts();
    this.deals= this.dealService.getDeals();
    this.dealSpecial = this.dealService.getDealSpecial();
    console.log('speacial deals: ', this.dealSpecial)
   // console.log(this.taille);

  }
/*
  openCart(){
    this.router.navigate(['cart'])
  }*/
}