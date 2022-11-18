import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { ProductService } from 'src/app/_services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Product{
  id:string,
  title:string,
  price:number,
  image: string
}




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  products: Product[] | undefined;

  product: any = {
    title: null,
    price: null,
    image:null,
   
  };


  constructor(private productService: ProductService, 
    private route: ActivatedRoute,
    private http: HttpClient,
    ) { }
  ngOnInit(): void {
    this.getProducts()
  
  }
  getProducts(){
    this.http.get<any>( 'http://localhost:8080/kasi/product').subscribe(
      response => {
        console.log(response);
        this.products = response;
      }
    );
  }

  postProduct():void{

    const data = this.product
    
    this.productService.postProduct(data).subscribe(
      response => {
        console.log(response);
        this.product = response;
      }
    );

  }

 






}
