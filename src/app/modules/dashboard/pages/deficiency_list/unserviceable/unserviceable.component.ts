import { Component, OnInit,NgZone,Input,Output,EventEmitter } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Service} from '../../shared/service';
@Component({
  selector: 'app-unserviceable',
  templateUrl: './unserviceable.component.html',
  styleUrls: ['./unserviceable.component.css']
})
export class UnserviceableComponent implements OnInit {
  unserv;

  constructor(private zone: NgZone,private service:Service)
   {
  
   }
  chart;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.unserv=this.service.data2.subscribe(
      (response)=>{
        this.destroy();
        console.log(response[6]);
        this.genrateChart(response[6]);
      },
      (error)=>
      {console.log(error);
      });
     
  
}
genrateChart(data)
{
  this.zone.runOutsideAngular(() => {
    var chart = am4core.create("linesingle1", am4charts.XYChart);
    
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
    series1.strokeWidth = 3;
    series1.tensionX = 0.8;
    series1.bullets.push(new am4charts.CircleBullet());
    series1.connect = true;
    series1.stroke = am4core.color("rgb(235,218,87)");
    series1.fill=am4core.color("rgb(235,218,87)");
    
    
         
      
  });
}
ngOnDestroy() {
  this.zone.runOutsideAngular(() => {
    if (this.chart) {
      this.chart.dispose();
    }
  });
  this.unserv.unsubscribe();
}
destroy()
{
  this.zone.runOutsideAngular(() => {
    if (this.chart) {
      this.chart.dispose();
    }
  });

}

}