import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products!: Product[]
  columns: Array<string> = ['id', 'name', 'priceD', 'priceP']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void{
    this.productService.getProducts().subscribe(
      products => {
        this.products = products
        console.log(products)
      }
    )
  }

}
