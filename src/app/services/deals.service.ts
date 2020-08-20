import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DealsService {
  private data =[
    {
      dealTitle:'Summer Sun Ice Cream Pack',
      dealPiece:'pieces 5',
      dealWay:'15',
      dealNewPrice: '12',
      dealOldPrice:'18'
    },
    {
      dealTitle:'Summer Sun Ice Cream Pack',
      dealPiece:'pieces 5',
      dealWay:'15',
      dealNewPrice: '12',
      dealOldPrice:'18'
    },
    
  ];

  constructor() { }
  getDeals(){
    return this.data;
  }}