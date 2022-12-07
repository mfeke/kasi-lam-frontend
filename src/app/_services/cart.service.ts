import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private productService: ProductService, private http: HttpClient ) { }

   API_product="http://localhost:8080/api/cart"

  public cartItemList :any =[]


  getCart(): Observable<any>{
    return this.http.get<any>(this.API_product)
    
  }


  addToCart(data: any): Observable<any>{

    return this.http.post<any>(this.API_product, data)
    
  }
  // getTotalPrice( item:any){
  //   let getTotal = 0;
  //   return item.filter((elem:any)=> elem.price )
    

  // }

  deleteProduct(id: string): Observable<any> {
    const url = `${this.API_product}/${id}`;
  
    return this.http.delete<any>(url)
  }

  getTotalPrice(items: any, product: any) {

    return items.filter((elem:any) => elem.id != product.id)
  }

  clearCart(): Observable<any>{
    return this.http.delete(this.API_product+'/all/products')
  }
}
