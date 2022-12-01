// import { Product } from './../../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
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
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user?: any
  shops: any[] = []
  constructor(
    private userService: UserService, 
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.user = this.tokenStorageService.getUser();
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
  

}
