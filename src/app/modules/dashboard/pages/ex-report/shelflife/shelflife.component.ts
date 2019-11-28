import { Component, OnInit,NgZone ,Input} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import {Service} from '../../shared/service';
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-shelflife',
  templateUrl: './shelflife.component.html',
  styleUrls: ['./shelflife.component.css']
})
export class ShelflifeComponent implements OnInit {
  head = new Headers({'Content-Type':'application/json'});
  private chart;
  unserv;
  constructor(private zone:NgZone,private service:Service) { }
  ngAfterViewInit() {
    this.unserv=this.service.data.subscribe(
      (response)=>{
        this.destroy();
        console.log("dfdf");
        this.genrateChart(response[0]);
      },
      (error)=>
      {console.log(error);
      });
    
  }

  ngOnInit() {
    
    
  }
   genrateChart(data)
   {
    this.zone.runOutsideAngular(() => {
      
     
      this.chart = am4core.create("linechart2", am4charts.XYChart);
      this.chart.fontSize=8;
      let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "vendors";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.grid.template.disabled = true;
      let valueAxis1 = this.chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis1.renderer.baseGrid.disabled = true;
      let series2 = this.chart.series.push(new am4charts.ColumnSeries());
      series2.dataFields.valueY = "faulty";
      series2.dataFields.categoryX = "vendors";
      series2.name = "faulty";
      series2.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
      series2.columns.template.fillOpacity = .8;
      series2.columns.template.fill =   am4core.color("rgb(17,179,154)");
      let columnTemplate= series2.columns.template;
      columnTemplate.strokeWidth = 0;
      columnTemplate.strokeOpacity = 0;
      var col;
      this.chart.data=data;
    
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
  {this.zone.runOutsideAngular(() => {
    if (this.chart) {
      this.chart.dispose();
    }
  });

  }
}
