import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CathegoriesService {
  private data =[
    {
      categoryName:'Steak',
      categorySrc:'steak'
    },
    {
      categoryName:'Vegetables',
      categorySrc:'Vegetables'
    },    
    {
      categoryName:'Beverages',
      categorySrc:'Beverages'
    },    
    {
      categoryName:'Fish',
      categorySrc:'Fish'
    },
    {
      categoryName:'Wine',
      categorySrc:'Wine'
    },
  ];

 // private cart = [];
  constructor() { }

  getProducts(){
    return this.data;
  }

 /* getCart(){
    return this.cart;
  }*/
}