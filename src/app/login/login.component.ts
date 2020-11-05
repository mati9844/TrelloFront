import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  greeting = {};

  constructor(private http: HttpClient) {

    //http.get('http://localhost:8080/api/v1/testo').subscribe(data => this.greeting = data);
    http.get('https://paw-back.herokuapp.com/user?id=11').subscribe(data => this.greeting = data);

  }

  ngOnInit() {
  }

}
