import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  endpoint: string = "http://localhost:8080/products"

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.endpoint);
  }

  getProductById(id_product: number): Observable<Product>{
    return this.httpClient.get<Product>(this.endpoint + "/" + id_product);
  }

}
