import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  cart = [];
  items = [];

  sliderConfig={
    spaceBetween : 10,
    centeredSlides:true,
    slidesPerView: 2
  }
  
  constructor(private cartService: CartService, private router:Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
  }

  addToCart(product){
    this.cartService.addProduct(product);
  }

  openCart(){
    this.router.navigate(['cart'])
  }
}