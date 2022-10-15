import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})

export class ProductService {

  private readonly baseUrl: string = "http://localhost:3000/frete";

  constructor( private http: HttpClient) { }




}