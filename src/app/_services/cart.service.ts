import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private productService: ProductService ) { }

  public getCart(): any {
    const cart = window.localStorage.getItem('cart');
    if (cart) {
    return JSON.parse(cart);
    }return ;
  }
  // getTotalPrice( item:any){
  //   let getTotal = 0;
  //   return item.filter((elem:any)=> elem.price )
    

  // }

  deleteItem(items: any, product: any) {
    return items.filter((elem:any) => elem.id != product.id)
  }

  clearCart(){
    return window.localStorage.removeItem('cart')
  }
}
