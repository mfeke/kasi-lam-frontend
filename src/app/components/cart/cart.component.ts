import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  products: any[] = []
  
  total: any = 0
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart()
    
  }


   getCart(){
      this.cartService.getCart().subscribe({

        next: data => {
                this.products = data
                console.log(this.products)
                this.products.map(elem =>{
                  this.total += elem.price
                })
              },
              error: err => console.error(err.message)

      })
   }
   deleteProduct(id: string){
    this.cartService.deleteProduct(id).subscribe(
      res => {

        console.log(res)
        window.location.reload()
      }
    )
  }


  // deleteItem(product:any){
  //   this.cart = this.cartService.deleteItem(this.cart, product)
  //   window.localStorage.setItem('cart', JSON.stringify(this.cart))
  // }

  deleteAll(){
    this.cartService.clearCart().subscribe(res => {
      console.log(res)
      window.location.reload()
    })
  }
  
}
