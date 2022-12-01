import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = []
  total: any = 0
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
    this.cart.map(ele => {
      this.total += ele.price
    })
  }

  deleteItem(product:any){
    this.cart = this.cartService.deleteItem(this.cart, product)
    window.localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  deleteAll(){
    this.cartService.clearCart()
  }

}
