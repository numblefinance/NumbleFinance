import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  msg: any;
  res: any;
  user: any = {};
  id: any;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router) { }

  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get('id');
    this.homeService.getUserById(this.id).subscribe(
      (res) => {
        this.user = res;
        if (this.user.length == 0) {

        } else {
        //  this.router.navigate(['/user-list']);
        }
        console.dir(this.user);
      }, // success path
      error => console.log(error) // error path
    );
  }


  edit() {
    console.dir(this.user);
    this.homeService.edit(this.id,this.user).subscribe(
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
