import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { user } from 'src/app/_services/user.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-shop-menu',
  templateUrl: './shop-menu.component.html',
  styleUrls: ['./shop-menu.component.css']
})
export class ShopMenuComponent implements OnInit {
  User:user ={
  
  }

  token = this.tokenStorage.getToken()
  user = this.tokenStorage.getUser()

  products: any[] = []
  // currentShop:Shop={}

  constructor( private route: ActivatedRoute, 
    private productService: ProductService ,
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.getMenu()
    this.getShopId(this.route.snapshot.params['id'])
  }

  getMenu(){
    const id = this.route.snapshot.paramMap.get('id')
    
    this.productService.getMenu(id).subscribe({
      next: data => {
        this.products = data
        console.log(this.products)
      },
      error: err => console.error(err.message)
    })
  }

  getShopId(id:null){

    this.userService.getFindId(id).
    subscribe({
      next:(data)=>{
        this.User = data;
        console.log(data);
      },
      error:(e) =>console.error(e)
    });
  }
    deleteProduct(id: string){
      this.productService.deleteProduct(id).subscribe(
        res => {
          console.log(res)
          window.location.reload()
        }
      )
    }
    // updateProduct(id:string){
    //   this.productService.updateProduct(id).subscribe(
    //     res =>{
    //       console.log(res)
    //       window.location.reload()
    //     }
    //   )
    // }

    addToCart(title: string, image: string, price: any){
      this.cartService.addToCart({title, image, price}).subscribe({
        next: data => {
          console.log(data)
        }
      })
    //  window.alert("add to cart")
    }
}


