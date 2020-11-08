import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RestapiService} from "../_services/restapi.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  message: string;
  users: any;

  constructor(private service: RestapiService) {}

  ngOnInit() {
  }

  doLogin() {
    this.service.getUsers().subscribe(data => this.users = data);
    console.log(this.users);

    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {console.log(data)});
  }

}
