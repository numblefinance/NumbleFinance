import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  msg: any;
  res: any;
  users: any = [];

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router) { }


  ngOnInit() {
    this.homeService.getUsers().subscribe(
      (res) => {
        this.users = res; 
        console.dir(res);
      }, // success path
      error => console.log(error) // error path
    );
  }

}
