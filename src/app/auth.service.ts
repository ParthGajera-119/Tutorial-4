import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post('https://express-t4.onrender.com/api/login', { 
      username: email, 
      password:password 
    });
  }

  getUsers(){
    return this.http.get('https://express-t4.onrender.com/api/users');
  }
}