import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../home/home.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  mains:any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getItems().subscribe(
      (res) => this.mains=res, // success path
      error => console.log(error) // error path
    );
  }
}
