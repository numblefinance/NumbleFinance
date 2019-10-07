import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../home/home.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail: any;
  comuns: any;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.homeService.getItemById(id).subscribe(
      (res) => {
        this.detail = res;
        this.sumCount(res); 
      }, // success path
      error => console.log(error) // error path
    );
  }

  goToDetail(id) {
    this.router.navigate(['/detail', id]);
    this.homeService.getItemById(id).subscribe(
      (res) => {
        this.detail = res;
        this.sumCount(this.detail); 
      }, // success path
      error => console.log(error) // error path
    );
  }

  sumCount(detail) {
    let count = detail.count;
    detail.count= count+1;
    this.detail.count= detail.count;
    console.dir(detail);
    this.homeService.editCompany(detail.id,detail).subscribe(
      (ressum) => {  
        this.homeService.getItemByComun(this.detail.comun).subscribe(
          (rescom) => {
            this.comuns = rescom;
            console.dir(this.comuns);
    
          }, // success path
          error => console.log(error) // error path
        );
      }, // success path
      error => console.log(error) // error path
    );
 
  }
}
