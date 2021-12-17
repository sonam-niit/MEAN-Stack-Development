import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private service:ProductService) { }

  product:any;
  ngOnInit(): void {
    this.product=this.service.getProductById(2);
  }

  
}
