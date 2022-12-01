// import { Product } from './../../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { ProductService } from 'src/app/_services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

export interface Product{
  id:string,
  title:string,
  price:number,
  image: string
}




@Component({
  selector: 'app-home',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  selected!: string;
  options: any[] = ['Food', "Drinks" ]
  products: Product[] | undefined;
  submitted: boolean = false
  product: any = {
    title: null,
    price: null,
    image:null,
    category: null
  };

  user = this.tokenStorage.getUser()

  constructor(
    private productService: ProductService, 
    private tokenStorage: TokenStorageService
    ) { }
  ngOnInit(): void {
    
  
  }
  

  postProduct():void{
    this.productService.postProduct(this.product).subscribe(
      response => {
        console.log(response);
        this.product = {}
        this.submitted = true
      }
    );
      // setInterval(() => {
      //   window.location.replace('/home')
      // }, 1000)
  }
  deleteProduct(product: Product): void {
    this.product = this.product.filter((h: any) => h !== this.product);
    console.log(product)
    this.productService.deleteProduct(product.id).subscribe(
      response => {
        console.log(response);
        this.product = response;
      }
    );

  }
}
