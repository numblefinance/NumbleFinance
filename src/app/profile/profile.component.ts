import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  msg: any;
  res: any;
  user: any = {};
  id:any;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("id"); 
    this.homeService.getUserById(this.id).subscribe(
      (res) => {
        this.user = res;  
      }, // success path
      error => console.log(error) // error path
    );
  }

  edit() { 
    this.homeService.edit(this.id,this.user).subscribe(
      (res) => {
        this.res = res;  
        if (this.res.length == 0) {

        } else {
        //  this.router.navigate(['/user-list']);
        }
      }, // success path
      error => console.log(error) // error path
    );
  }

}
