import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  search: string = '';
  inputs = [1];
  
  constructor (private router: Router) {
  }

  ngOnInit(): void {
  }

  addInput() {
    this.inputs.push(1);
    this.router.navigateByUrl(`/products/${this.search}`).then (() => {window.location.reload()});
  }

}