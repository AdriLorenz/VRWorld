import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Array<Product> = [];
  // public myProduct: Product;

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

    // this.productService.getProductById(1).subscribe((b: Product) => {
    //   this.myProduct = b;

    //   console.log(b.name_product)
    // });
  }

}
