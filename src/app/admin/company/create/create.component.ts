import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../../../home/home.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  msg: any;
  res: any;
  company: any = {};

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router) { }

  ngOnInit() {
  }


  register() {
    this.homeService.createCompany(this.company).subscribe(
      (res) => {
        this.res = res;
        if (this.res.length === 0) {

        } else {
        //  this.router.navigate(['/user-list']);
        }
      }, // success path
      error => console.log(error) // error path
    );
  }
}
