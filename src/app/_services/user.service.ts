import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://54.227.94.57:8080/api/shop/';
const AUTH_TOKEN = window.sessionStorage.getItem('auth-token')

const httpOptions = {
  headers: new HttpHeaders({ 'x-access-token': `${AUTH_TOKEN}` })
};
export interface user{
  id?:string;
  username?:string;
  shopName?:string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }
  getAllShops(): Observable<any> {
    return this.http.get(API_URL);
  }
  getFindId(id:null) : Observable <any>{
    return this.http.get(`${API_URL}/${id}` );
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
