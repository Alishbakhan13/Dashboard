import { Component, OnInit,NgZone,Input,Output,EventEmitter } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Service} from './../shared/service';
@Component({
  selector: 'app-curve-fitting',
  templateUrl: './curve-fitting.component.html',
  styleUrls: ['./curve-fitting.component.css']
})
export class CurveFittingComponent implements OnInit {
  private chart;
  @Input() enable;
  @Output() show = new EventEmitter<boolean>();
  unserv;
  selected = 'option2';
  title='title';
  constructor(private zone: NgZone,private service:Service)
   {
  
   }

   genrateChart(data)
  {  this.zone.runOutsideAngular(() => {
    var chart = am4core.create("linechart100", am4charts.XYChart);
    
    // Add data
    chart.data = data;
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  
    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    // Create series
    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "value";
    series1.dataFields.dateX = "date";
 
    series1.strokeWidth = 2;
    series1.tensionX = 0.77;
    series1.stroke = am4core.color("rgb(235,218,87)");
    series1.fill=am4core.color("rgb(235,218,87)");
    
    console.log(this.chart.data);
     
  
  });}
  
  ngAfterViewInit() {
    //this.unserv=this.service.data2.subscribe(
      //(response)=>{
        //this.destroy();
        var faultC=[ { 
           date:"2012-07-28",
           value: 11
       },  {
          date: "2012-08-01",
          value: 13
       }, {
          date:"2012-08-02",
          value: 22
       }, {
          date:"2012-08-03",
          value: 23
       }, {
          date:"2012-08-04",
          value: 60
       }, {
          date:"2012-08-05",
          value: 40
       }, {
          date: "2012-08-06",
          value: 49
       }] ;
        this.genrateChart( faultC);
      //  this.genrateChart(response[1]);
      //},
    ////  (error)=>
   //////   {console.log(error);
    //  });
    
  }
   func(item)
   {
     this.title=item;
   }
  ngOnInit() {
  }
  ngOnDestroy() {
  /* this.zone.runOutsideAngular(() => {
  if (this.chart) {
        this.chart.dispose();
      }
    });
    this.unserv.unsubscribe();  */
  }
  destroy()
  {  /*
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });*/
  
  }  

}
