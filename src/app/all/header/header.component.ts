import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mains: any;
  searchText:String="";
  constructor(private homeService: HomeService) { }
  
  ngOnInit() {
    this.homeService.getItems().subscribe(
      (res) => {
        this.mains = res; 
      },  // success path
      error =>{
        console.log(error);  
      }  // error path
    );
  }

}
