import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    return this.http.get('https://paw-back.herokuapp.com/user?id=1');
  }

  public getUsers() {
    return this.http.get('https://paw-back.herokuapp.com/users/all');
  }

}
