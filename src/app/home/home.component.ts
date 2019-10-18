import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mains: any;
  constructor(private homeService: HomeService, private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxService.start();
    this.homeService.getItems().subscribe(
      (res) => {
        this.mains = res;
        this.ngxService.stop()
      },  // success path
      error =>{
        console.log(error); 
        this.ngxService.stop()
      }  // error path
    );
  }
}

