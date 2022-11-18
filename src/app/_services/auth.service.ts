import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API ='http://localhost:8080/api/auth/';

const Produt_Api ="http://localhost:8080/kasi/product"
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable({
providedIn: 'root'})export class AuthService {
constructor(private http: HttpClient) { }
  login(username: string, password: string, ): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username, password
    },
    httpOptions);
  }
  register(username: string, shopName:string, email: string, password: string, image:string ): Observable<any> {
      return this.http.post(AUTH_API + 'signup', {
        username, email, password, image, shopName
      },
      httpOptions);
  }

 
}
