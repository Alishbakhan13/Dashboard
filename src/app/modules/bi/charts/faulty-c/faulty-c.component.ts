import { Component, OnInit,NgZone,Input,Output,EventEmitter } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4themes_kelly from "@amcharts/amcharts4/themes/kelly.js";
//import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
//am4core.useTheme(am4themes_kelly);
import { Service } from '../../shared/shelf.service';
am4core.useTheme(am4themes_animated);
import {Router, RouterLink} from '@angular/router';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-faulty-c',
  templateUrl: './faulty-c.component.html',
  styleUrls: ['./faulty-c.component.css']
})
export class FaultyCComponent implements OnInit {
  private chart: am4charts.XYChart;
  @Input() enable;
  @Input() data;
  @Output() show = new EventEmitter<boolean>();
  total;
  set(h:number)
  {
    this.total=h;
    console.log(h);
  }

constructor(private zone: NgZone,private router: Router,private service:Service) {}

ngOnDestroy() {
  this.zone.runOutsideAngular(() => {
    if (this.chart) {
      this.chart.dispose();
    }
  });
}
ngAfterViewInit() {
  this.zone.runOutsideAngular(() => {
    this.ChartGenerate();
    
      });
    }
      

ngOnInit()
{
  this.service.see.subscribe(g=>{
    this.ngOnDestroy();
    this.zone.runOutsideAngular(() => {
      this.ChartGenerate();
      
        });
  });

}
ChartGenerate()
{
  let line = am4core.create("linediv", am4charts.XYChart); 
  line.dataSource.url = "http://127.0.0.1:8000/practice/faults/";
  line.dataSource.load();
  line.validate();
  line.validateData();
  line.dateFormatter.inputDateFormat = "yyyy-MM-dd";
  let see = new Subject<number>();
  
    //for making request every 5 th second
    //this.chart.dataSource.reloadFrequency = 5000;
    var total=0;
     line.dataSource.events.on("parseended", function(ev) {
      // parsed data is assigned to data source's `data` property
     
      ev.target.data.forEach(element => {
        total=element['value']+total;
      });
      see.next(Math.floor(total));
     // this.set(ev.target.data.length);
     
       
    });
// Create axes
  let dateAxis= line.xAxes.push(new am4charts.DateAxis());
  let valueAxis= line.yAxes.push(new am4charts.ValueAxis());
// Create series
  let series = line.series.push(new am4charts.LineSeries());
  line.series.template.events.on("hit", function(ev) {
    if (this.enable==true)
    {
   this.show.emit(true);
   this.router.navigate(['/powerbi'], {fragment:"faults", replaceUrl: true });;}
 }, this);
  series.dataFields.valueY = "value";
  series.dataFields.dateX = "date";
  series.tooltipText = "{value}"
  series.strokeWidth = 2;
  series.minBulletDistance = 15;
  series.events.on("hit", function(ev) {
    if (this.enable==true)
    {
   this.show.emit(true);
   this.router.navigate(['/powerbi'], {fragment:"faults", replaceUrl: true });;}
 }, this);
// Drop-shaped tooltips
  series.tooltip.background.cornerRadius = 20;
  series.tooltip.background.strokeOpacity = 0;
  series.tooltip.pointerOrientation = "vertical";
  series.tooltip.label.minWidth = 40;
  series.tooltip.label.minHeight = 40;
  series.tooltip.label.textAlign = "middle";
  series.tooltip.label.textValign = "middle";
  series.stroke =    am4core.color("rgb(141,210,197)");

// Make bullets grow on hover
  let bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.strokeWidth = 2;
  bullet.circle.radius = 4;
  bullet.circle.fill = am4core.color("rgb(141,210,197)");
  bullet.events.on("hit", function(ev) {
    if (this.enable==true)
    {
   this.show.emit(true);
   this.router.navigate(['/powerbi'], {fragment:"faults", replaceUrl: true });;}
 }, this);
// Drop-shape
  let bullethover = bullet.states.create("hover");
  bullethover.properties.scale = 1.3;
  
// Make a panning cursor
  line.cursor = new am4charts.XYCursor();
  line.cursor.behavior = "panXY";
  line.cursor.xAxis = dateAxis;
  line.cursor.snapToSeries = series;
  this.chart=line;
}

}
