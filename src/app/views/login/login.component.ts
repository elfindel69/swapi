import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;
  constructor(private authService: AuthService,private router:Router) {
      this.email ='elfindel69@gmail.com';
      this.password ='azerty';
  }

  ngOnInit(): void {
  }

  onClickLogin() {
    this.authService.login(this.email,this.password).then(() => {
      this.router.navigateByUrl("heroes");
    });
  }
}
