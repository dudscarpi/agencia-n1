import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product/product.model';
import { ProductService } from './product/product.service';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  panelOpenState = false;
  numb: number = 1;

  products!: Product

  constructor(private snackBar: MatSnackBar, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void{
    this.productService.getProducts().subscribe(
      products => {
        products = products
        console.log(products)
      }
    )
  }

  add(){
    if(this.numb != 9){
      this.numb += 1;
    }
  }

  remove(){

    if(this.numb != 1){
      this.numb -= 1;
    }
  }


  openSnackBar() {
    this.snackBar.open( 'Produto(s) adicionado(s) ao carrinho!', 'OK', {
      duration: 5000,
      horizontalPosition: 'center',
    });
  }

}
