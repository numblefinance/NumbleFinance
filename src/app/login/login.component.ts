import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../home/home.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: any;
  res: any;
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.dir(this.user);
    this.homeService.login(this.user).subscribe(
      (res) => {
        this.res = res; 
        if (this.res.length == 0) {
        } else {
          this.router.navigate(['/home']);
          localStorage.setItem("id",this.res[0].id); 
        }
      }, // success path
      error => console.log(error) // error path
    );
  }

}
