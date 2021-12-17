import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //initialize product service here to use it
  constructor(private service:ProductService) { }

  list:any;

  ngOnInit(): void {
    this.list=this.service.getProducts();
  }

}
