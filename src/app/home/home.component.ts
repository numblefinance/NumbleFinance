import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mains:any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getItems().subscribe(
      (res) => this.mains=res, // success path
      error => console.log(error) // error path
    );
  }
}

