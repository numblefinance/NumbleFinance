import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeService } from '../home/home.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail: any = {};
  comuns: any;
  comments: any;
  newComment: any = {};
  chart: boolean;
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  years: any = '';
  dataSet: any = [];
  revenue: any = '';
  public lineChartLabels: Label[];
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.homeService.getItemById(id).subscribe(
      (res) => {
        this.detail = res;
        this.sumCount(res);
        this.homeService.getComment(id).subscribe(
          (resComment) => {
            this.comments = resComment;
            this.homeService.getChart('AAPL').subscribe(
              (resChart) => {
                const result: any = resChart;
                const revenue = result.map(element => {
                  return element.revenue;
                });
                const costRevenue = result.map(element => {
                  return element.costRevenue;
                });
                const grossProfit = result.map(element => {
                  return element.grossProfit;
                });
                const incomeTax = result.map(element => {
                  return element.incomeTax;
                });
                const other = result.map(element => {
                  return element.other;
                });
                const research = result.map(element => {
                  return element.research;
                });
                const netIncome = result.map(element => {
                  return element.netIncome;
                });
                const selling = result.map(element => {
                  return element.selling;
                });
                this.years = result.map(element => {
                  return element.year;
                });
                this.dataSet = [
                  { data: revenue , label: 'Reveneu' },
                  { data: costRevenue , label: 'Cost Revenue' },
                  { data: grossProfit , label: 'grossProfit' },
                  { data: incomeTax , label: 'incomeTax' },
                  { data: other , label: 'other' },
                  { data: research , label: 'research' },
                  { data: netIncome , label: 'netIncome' },
                  { data: selling , label: 'selling' }
                ];
                this.lineChartLabels = this.years;
                this.lineChartData = this.dataSet;
              }, // success path
              error => console.log(error) // error path
            );
          }, // success path
          error => console.log(error) // error path
        );
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

  createComment() {
    this.newComment.idCompany = this.detail.id;
    this.newComment.idUser = 1;
    this.homeService.createComment(this.newComment).subscribe(
      (res) => {
        this.comments.push(this.newComment);
      }, // success path
      error => console.log(error) // error path
    );
  }

  sumCount(detail) {
    let count = detail.count;
    detail.count = count + 1;
    this.detail.count = detail.count;
    console.dir(detail);
    this.homeService.editCompany(detail.id, detail).subscribe(
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
