import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface Product{
  id:string,
  title:string,
  price:number,
  image: string
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_product="http://localhost:8080/kasi/product"

  constructor(private http: HttpClient) { }
  getProduct(id: string | null): Observable<Product> {
    const url = `${this.API_product}`;
    return this.http.get<Product>(url).pipe();
  }


  
  postProduct(data: any ): Observable<any> {
   
    return this.http.post(  this.API_product, data,
    httpOptions);
  }  
 
}