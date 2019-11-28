import { Component, OnInit,NgZone, Input ,Output,EventEmitter} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
import {Router, RouterLink} from '@angular/router';
import { enableBindings } from '@angular/core/src/render3';
import {Service} from '../../shared/service';

@Component({
  selector: 'app-stock-level',
  templateUrl: './stock-level.component.html',
  styleUrls: ['./stock-level.component.css']
})
export class StockLevelComponent implements OnInit {
  private chart;
  unserv;

  constructor(private zone:NgZone,private router: Router,private service:Service) { }
  ngAfterViewInit() {
    this.unserv=this.service.data2.subscribe(
      (response)=>{
        this.destroy();
        this.genrateChart(response[3]);
      },
      (error)=>
      {console.log(error);
      });
    
    
  }
  genrateChart(data)
{
  this.zone.runOutsideAngular(() => {
      
     
    this.chart = am4core.create("linechart3", am4charts.XYChart);
    this.chart.fontSize=12;
    this.chart.responsive.enabled = true;
    this.chart.css="{font-size:2vh;}";
    this.chart.legend = new am4charts.Legend();
    let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "item";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.grid.template.disabled = true;
    let valueAxis1 = this.chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.renderer.baseGrid.disabled = true;
    let series2 = this.chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "Faulty";
    series2.dataFields.categoryX = "item";
  series2.name = "Serviceable";

    series2.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series2.columns.template.fillOpacity = .8;
    series2.columns.template.fill = am4core.color("rgb(17,179,154)");


    let columnTemplate= series2.columns.template;
    columnTemplate.strokeWidth = 0;
    columnTemplate.strokeOpacity = 0;

    let series3 = this.chart.series.push(new am4charts.ColumnSeries());
    series3.dataFields.valueY = "Faulty1";
    series3.dataFields.categoryX = "item";
  series3.name = "UnServiceable";

    series3.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series3.columns.template.fillOpacity = .8;
    series3.columns.template.fill = am4core.color("rgb(145,225,203)");


    let columnTemplate2= series3.columns.template;
    columnTemplate2.strokeWidth = 0;
    columnTemplate2.strokeOpacity = 0;
    console.log(data);
    this.chart.data = data; 
  
  });
}

  ngOnInit() {
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