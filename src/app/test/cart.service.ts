import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data =[
    {
      category:'pizza',
      expanded : true,
      products:[
        {id:0, name:'salami', price:'8'},
        {id:1, name:'Classic', price:'5'},
        {id:2, name:'tuna', price:'9'},
        {id:3, name:'hawai',price:'7'}
      ]
    },
    {
      category:'pasta',
      products:[
        {id:4, name:'Mac&cheese',price:'8'},
        {id:5, name:'bolognese', price:'6'}
      ]
    },
    {
      category:'salad',
      products:[
        {id:6, name:'ham&egg', price:'8'},
        {id:7, name:'Basic', price:'5'},
        {id:8, name:'Ceaser', price:'9'}
      ]
    }
  ];

  private cart = [];
  constructor() { }

    getProducts(){
      return this.data;
    }

    getCart(){
      return this.cart;
    }

    addProduct(product){
      this.cart.push(product);
    }

}
