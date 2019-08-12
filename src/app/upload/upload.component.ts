import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
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
            company: item[1],
            count: item[2],
            graph1: item[3],
            graph2: item[4],
            description: item[5].split('-').join(','),
            comun: item[6],
            url: item[7]
          }); 
        });
      } 
      this.regis.shift();
    }

  }

  uploadCSV(){
    this.homeService.uploadCSV(this.regis).subscribe(
      (res) => { 
        alert(JSON.stringify(res));
        console.dir(res);
      }, // success path
      error => console.log(error) // error path
    );
  }

} 