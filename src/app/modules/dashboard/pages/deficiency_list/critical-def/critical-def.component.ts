import { Component, OnInit,NgZone,Input,Output,EventEmitter } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4themes_kelly from "@amcharts/amcharts4/themes/kelly.js";
//import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import {Service} from '../../shared/service';

@Component({
  selector: 'app-critical-def',
  templateUrl: './critical-def.component.html',
  styleUrls: ['./critical-def.component.css']
})
export class CriticalDefComponent implements OnInit {
  private chart: am4charts.PieChart;
 
  pi ;
  unserv;

constructor(private zone: NgZone,private service:Service)
 {

 }

ngAfterViewInit() {
  this.unserv=this.service.data2.subscribe(
    (response)=>{
      this.destroy();
      this.genrateChart(response[0]);
    },
    (error)=>
    {console.log(error);
    });
   
      
}
genrateChart(data)
  {
    this.zone.runOutsideAngular(() => {
      let chartPie = am4core.create("Piediv_2", am4charts.PieChart);
      chartPie.data = data;
      let pieSeries = chartPie.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      //to remove  the  connected pie chart label
      pieSeries.labels._template.text="";
      // This creates initial animation
      pieSeries.legendSettings.itemValueText=" ";
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
     
      // for setting labels  of the leged value
   
      pieSeries.legendSettings.labelText="";
      this.pi=pieSeries;
      // This creates initial animation
     
       // for setting labels  of the legend
      //chartPie.legend.labels.template.text = "[bold {color}]{country}";
      
     
      
      
      
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
ngOnInit() {}
  

  



}