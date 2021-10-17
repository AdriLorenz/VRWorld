import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  public products: Array<Product> = [];

  constructor(private productService: ProductService, private router: Router, route: ActivatedRoute) {

    route.params.subscribe((x) => {
      this.loadInfo()
    })

   }

  ngOnInit(): void {
  }

  loadInfo() {
    this.productService.getProducts().subscribe((b: Array<Product>) => {
      this.products = b;
    })
  }

}
