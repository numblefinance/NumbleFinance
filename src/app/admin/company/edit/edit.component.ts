import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../../../home/home.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  msg: any;
  res: any;
  company: any = {};
  id: any;
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router) { }

  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get('id');
    this.homeService.getCompany(this.id).subscribe(
      (res) => {
        this.company = res;
        if (this.company.length == 0) {

        } else {
        //  this.router.navigate(['/user-list']);
        }
      }, // success path
      error => console.log(error) // error path
    );
  }

  edit() {
    this.homeService.editCompany(this.id,this.company).subscribe(
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
