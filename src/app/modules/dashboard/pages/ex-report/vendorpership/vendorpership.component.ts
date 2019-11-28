import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4themes_kelly from "@amcharts/amcharts4/themes/kelly.js";
//import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import {Service} from '../../shared/service';
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-vendorpership',
  templateUrl: './vendorpership.component.html',
  styleUrls: ['./vendorpership.component.css']
})
export class VendorpershipComponent implements OnInit {
  private chart: am4charts.PieChart;
  unserv;
  constructor(private zone: NgZone,private service:Service) {}
  
  ngAfterViewInit() {
    this.unserv=this.service.data.subscribe(
      (response)=>{
        this.destroy();
        this.genrateChart(response[4]);
      },
      (error)=>
      {console.log(error);
      });
        
  }
  destroy()
  {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
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
  ngOnInit()
  {}

  genrateChart(data)
  {
    this.zone.runOutsideAngular(() => {
     
      let chart = am4core.create("Piediv9", am4charts.PieChart);
      
      let selected;
let types = data;

// Add data


// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "percent";
pieSeries.dataFields.category = "type";
pieSeries.slices.template.propertyFields.fill = "color";
pieSeries.slices.template.propertyFields.isActive = "pulled";
pieSeries.slices.template.strokeWidth = 0;
pieSeries.labels.template.text="";

pieSeries.colors.list = [
  am4core.color("rgb(145,225,203)"),
        am4core.color("rgb(238,204,22)"),
        am4core.color("rgb(235,218,87)"),
        am4core.color("rgb(17,179,154)"),
        am4core.color("rgb(191,212,90)"),
      
        am4core.color("rgb(138,201,28)"),
        am4core.color("rgb(16,127,122)"),
        am4core.color("rgb(11,194,190)"),
        am4core.color("rgb(170,235,236)")];
var color=pieSeries.colors.list;
function generateChartData() {
  let chartData = [];
  for (var i = 0; i < types.length; i++) {
    if (i == selected) {
      for (var x = 0; x < types[i].subs.length; x++) {
        chartData.push({
          type: types[i].subs[x].type,
          percent: types[i].subs[x].percent,
          color: color[i],
          pulled: true
        });
      }
    } else {
      chartData.push({
        type: types[i].type,
        percent: types[i].percent,
        color: color[i],
        id: i
      });
    }
  }
  return chartData;
}
  
chart.data = generateChartData();
pieSeries.slices.template.events.on("hit", function(event) {
  let eventHolder=<any>event.target.dataItem.dataContext;
  if (eventHolder.id != undefined) {
    selected = eventHolder.id;
  } else {
    selected = undefined;
  }
  chart.data = generateChartData();
});
  });
      
  }
}