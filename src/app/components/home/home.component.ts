// import { Product } from './../../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ProductService } from 'src/app/_services/product.service';

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
  like:any
  react!:boolean 
  user?: any
  products:any =[]
  shops: any[] = []
  constructor(
    private userService: UserService, 
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.user = this.tokenStorageService.getUser();
    this.productService.getAllProduct().subscribe(data=>{
      console.log(data)
      this.products = data
    })

    console.log(this.user)
    this.userService.getAllShops().subscribe({
      next: data => {
        this.shops = data
        console.log(this.shops)
      },
      error: err => {
        console.log(err)
        
      }
    })
  
  }
  
  onlike(){
     if(this.react ===true){

    }

  }

}
