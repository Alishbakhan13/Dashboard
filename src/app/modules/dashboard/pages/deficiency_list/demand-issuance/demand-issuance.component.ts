import { Component, OnInit,NgZone, Input ,Output,EventEmitter} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
import {Service} from '../../shared/service';
@Component({
  selector: 'app-demand-issuance',
  templateUrl: './demand-issuance.component.html',
  styleUrls: ['./demand-issuance.component.css']
})
export class DemandIssuanceComponent implements OnInit {
  private chart;
  @Input() enable;
  @Output() show = new EventEmitter<boolean>();
  unserv;

  constructor(private zone: NgZone,private service:Service)
   {
  
   }

   genrateChart(data)
  { this.zone.runOutsideAngular(() => {
      
     
    this.chart = am4core.create("linechart55", am4charts.XYChart);
    this.chart.fontSize=12;
    this.chart.responsive.enabled = false;
    this.chart.css="{font-size:2vh;}";
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
  series2.name = "Faulty";

    series2.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series2.columns.template.fillOpacity = .8;
    series2.columns.template.fill =   am4core.color("rgb(145,225,203)");

    let columnTemplate= series2.columns.template;
    columnTemplate.strokeWidth = 0;
    columnTemplate.strokeOpacity = 0;
   
    this.chart.data =data;;
     
  
  });}
  
  ngAfterViewInit() {
    this.unserv=this.service.data2.subscribe(
      (response)=>{
        this.destroy();
        this.genrateChart(response[1]);
      },
      (error)=>
      {console.log(error);
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
