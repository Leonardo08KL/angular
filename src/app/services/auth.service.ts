import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private hosting: string = 'http://127.0.0.1:8000/';
  private action: string = 'api/auth/login';
  private isLogin: boolean = false;
  private logoutUrl = 'api/auth/cerrar-sesion'; 
  private authSecretKey: string = 'Token_Bearer';
  private options: any;

  constructor(private http: HttpClient) {
    
    this.isLogin = !!localStorage.getItem(this.authSecretKey);
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-type': 'application/json',
      }),
    };
  }
  login(email: string, password: string): Observable<any> {
    return this.http.post(
      this.hosting + this.action,
      {
        email: email,
        password: password,
      }
    );
  }
  isUserLogin(): boolean {
    return this.isLogin;
  }
  logout(): boolean {
    localStorage.removeItem(this.authSecretKey);
    this.isLogin = false;
    return this.isLogin;
  }
  setTokeSecretKey(tokeSecret: string) {
    localStorage.setItem(this.authSecretKey, tokeSecret);
    this.isLogin = true;
  }

  
}
