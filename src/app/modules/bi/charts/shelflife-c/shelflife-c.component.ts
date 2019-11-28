import { Component, OnInit,NgZone, Input ,Output,EventEmitter} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
import {Router, RouterLink} from '@angular/router';
import { enableBindings } from '@angular/core/src/render3';
import { Service } from '../../shared/shelf.service';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-shelflife-c',
  templateUrl: './shelflife-c.component.html',
  styleUrls: ['./shelflife-c.component.css']
})
export class ShelflifeCComponent implements OnInit {
  private chart;
  total;
  @Input() enable;
  @Output() show = new EventEmitter<boolean>();
  constructor(private zone:NgZone,private router: Router,private service:Service) { }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.ChartGenerate();
    });
    
  }
  set(h:number)
  {
    this.total=h;
    console.log(h);
  }
  ngOnInit() {
    this.ngOnDestroy();
    this.service.see.subscribe(g=>{
        this.zone.runOutsideAngular(() => {
         this.ChartGenerate();
        });
  });
 
}
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
  ChartGenerate()
  {
    this.chart = am4core.create("linechart1", am4charts.XYChart);
    this.chart.dataSource.url = "http://127.0.0.1:8000/practice/shelf/";
    this.chart.validate();
    this.chart.validateData();
    this.chart.fontSize=12;
    this.chart.responsive.enabled = true;
    let see = new Subject<number>();
    this.chart.dataSource.events.on("error", function (ev) {
      console.log("Oopsy! Something went wrong");
    });
    //for making request every 5 th second
    //this.chart.dataSource.reloadFrequency = 5000;
    var total;
    this.chart.dataSource.events.on("parseended", function(ev) {
      // parsed data is assigned to data source's `data` property
      total=ev.target.data.length;
      see.next(total);
     // this.set(ev.target.data.length);
     
       
    });
   let g =see.subscribe((value)=>{
    this.set(value);
    g.unsubscribe();
   });
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
    series2.columns.template.fill =   am4core.color("rgb(17,179,154)");
    series2.columns.template.events.on("hit", function(ev) {
      if (this.enable==true)
     {
    this.show.emit(true);
    this.router.navigate(['/powerbi'], {fragment:"shelf", replaceUrl: false });;}
  }, this);

    let columnTemplate= series2.columns.template;
    columnTemplate.strokeWidth = 0;
    columnTemplate.strokeOpacity = 0;
  }

}
