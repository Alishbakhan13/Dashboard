import { Component, OnInit,NgZone, Input ,Output,EventEmitter} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
import {Router, RouterLink} from '@angular/router';
import { enableBindings } from '@angular/core/src/render3';
import {Service} from '../../shared/service';
@Component({
  selector: 'app-pre-installation',
  templateUrl: './pre-installation.component.html',
  styleUrls: ['./pre-installation.component.css']
})
export class PreInstallationComponent implements OnInit {
  chart;
  unserv;

  constructor(private zone: NgZone,private service:Service)
   {
  
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.unserv=this.service.data2.subscribe(
      (response)=>{
        this.destroy();
        this.genrateChart(response[2]);
      },
      (error)=>
      {console.log(error);
      });
    
}
genrateChart(data)
{
  this.zone.runOutsideAngular(() => {
    var chart = am4core.create("linedouble", am4charts.XYChart);
    chart.paddingRight = 20;
    
    // Add data
    chart.data =data;
    
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
    series1.stroke = am4core.color("rgb(17,179,154)");
  
    series1.bullets.push(new am4charts.CircleBullet());
    series1.connect = true;
    series1.fill=am4core.color("rgb(17,179,154)");
   
    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.dateX = "date";
    series2.strokeWidth = 3;
    series2.tensionX = 0.8;
    series2.stroke = am4core.color("rgb(238,204,22)");
    series2.fill=am4core.color("rgb(238,204,22)");
    series2.bullets.push(new am4charts.CircleBullet());
    this.chart=chart;
         
      
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