import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg: any;
  res: any;
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router) { }

  ngOnInit() {
  }


  register() {
    console.dir(this.user);
    this.homeService.register(this.user).subscribe(
      (res) => {
        this.res = res;
        if (this.res.length == 0) {

        } else {
        //  this.router.navigate(['/user-list']);
        }
        console.dir(res);
      }, // success path
      error => console.log(error) // error path
    );
  }
}
