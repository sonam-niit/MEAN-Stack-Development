import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products=[
    {name:"Pencil",availability:"14-12-2021",rating:4.5,price:5.9},
    {name:"Pen",availability:"16-12-2021",rating:4.2,price:5.0},
    {name:"Eraser",availability:"13-12-2021",rating:3.5,price:3.6},
    {name:"Scale",availability:"10-12-2021",rating:4.9,price:15.9},
    {name:"Book",availability:"20-12-2021",rating:4.1,price:50.23},
  ]

  getProducts()
  {
    return this.products;
  }
  getProductById(id:number)
  {
      return this.products[id];
  }
}
