import { Component, OnInit,NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4themes_kelly from "@amcharts/amcharts4/themes/kelly.js";
//import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";

am4core.useTheme(am4themes_animated);
import {Service} from '../../shared/service';
@Component({
  selector: 'app-compship',
  templateUrl: './compship.component.html',
  styleUrls: ['./compship.component.css']
})
export class CompshipComponent implements OnInit {
  private chart: am4charts.PieChart
  width;
  height;
  unserv;

  constructor(private zone: NgZone,private service:Service)
  {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
   
  ngAfterViewInit() {
    this.unserv=this.service.data.subscribe(
      (response)=>{
        this.destroy();
        console.log("dfd");
        this.genrateChart(response[1]);
      },
      (error)=>
      {console.log(error);
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
  ngOnInit()
  { 
    this.service.data.subscribe(
      (response)=>{
        this.destroy();
        console.log("dfd");
        this.genrateChart(response[1]);
      },
      (error)=>
      {console.log(error);
      });
   
  }
  genrateChart(data)
  {
    this.zone.runOutsideAngular(() => {
     
      let ChartPie = am4core.create("Piediv5", am4charts.PieChart);
      console.log(data);
      ChartPie.data =data;
      ChartPie.innerRadius = am4core.percent(50);

      let pieSeries1 = ChartPie.series.push(new am4charts.PieSeries());
      pieSeries1.dataFields.value = "litres";
      pieSeries1.dataFields.category = "country";
      pieSeries1.slices.template.stroke = am4core.color("#fff");
      pieSeries1.slices.template.strokeWidth = 2;
      pieSeries1.slices.template.strokeOpacity = 1;
      pieSeries1.labels.template.text="";
      var label = pieSeries1.createChild(am4core.Label);
      label.text ="8";
      label.horizontalCenter = "middle";
      label.verticalCenter = "middle";
      label.text.fontcolor("gray");
      label.text.bold();
      label.fontSize = 25;

      
      
      // pieSeries.slices.template.events.on("hit", function(ev) {
      //   chartPie.closeAllPopups();
      //   chartPie.openPopup("We clicked on <strong>" + ev.target.dataItem.dataContext.country + "</strong>");
      // });

      // This creates initial animation
      pieSeries1.colors.list = [
        am4core.color("rgb(145,225,203)"),
        am4core.color("rgb(238,204,22)"),
        am4core.color("rgb(235,218,87)"),
        am4core.color("rgb(17,179,154)"),
        am4core.color("rgb(191,212,90)"),
      
        am4core.color("rgb(138,201,28)"),
        am4core.color("rgb(16,127,122)"),
        am4core.color("rgb(11,194,190)"),
        am4core.color("rgb(170,235,236)")];
      pieSeries1.hiddenState.properties.opacity = 1;
      pieSeries1.hiddenState.properties.endAngle = -90;
      pieSeries1.hiddenState.properties.startAngle = -90;
      let marker = ChartPie.legend.markers.template.children.getIndex(0);
        //marker.cornerRadius(15, 15, 15, 15);
        marker.strokeWidth = 2;
        marker.strokeOpacity = 1;
        marker.stroke = am4core.color("#ccc");
  
    
      this.chart=ChartPie;
     
        });
   

  }
  }