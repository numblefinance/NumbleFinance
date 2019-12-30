import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-upload-graph',
  templateUrl: './upload-graph.component.html',
  styleUrls: ['./upload-graph.component.css']
})
export class UploadGraphComponent implements OnInit {
  csv: any;
  fileList: Array<any>;
  regis: any = [];
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router) { }

  ngOnInit() {
  }
  changeListener(files: FileList) {
    console.log(files);
    if (files && files.length > 0) {
      let file: File = files.item(0);
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        this.csv = reader.result;
        JSON.stringify(this.csv)
        this.fileList = this.csv.split('\r\n');
        this.fileList.forEach(element => {
          let item = element.split(',');
          this.regis.push({
            ticker: item[0],
            year: item[1],
            revenue: item[2],
            costRevenue: item[3],
            grossProfit: item[4],
            research: item[5],
            selling: item[6],
            other: item[7],
            incomeTax: item[8],
            netIncome: item[9]
          });
        });
      }
      this.regis.shift();
    }

  }

  uploadCSV() {
    this.homeService.uploadCSVGraph(this.regis).subscribe(
      (res) => {
        alert(JSON.stringify(res));
      }, // success path
      error => console.log(error) // error path
    );
  }

}; 