import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class ProductService {

  product!: Product

  private readonly baseUrl: string = "http://localhost:3001/products";

  constructor( private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
  
}