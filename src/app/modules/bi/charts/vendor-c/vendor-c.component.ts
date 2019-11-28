import { Component, OnInit,NgZone,Output,EventEmitter,Input } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Router, RouterLink} from '@angular/router';
import { Service } from '../../shared/shelf.service';
import { Observable, Subject } from 'rxjs';
am4core.useTheme(am4themes_animated);
am4core.options.commercialLicense = true;
@Component({
  selector: 'app-vendor-c',
  templateUrl: './vendor-c.component.html',
  styleUrls: ['./vendor-c.component.css']
})
export class VendorCComponent implements OnInit {
  @Input() enable;
  @Input() data;
  chart:am4charts.PieChart;
  totat;
  pi;
 
  @Output() show = new EventEmitter<boolean>();
  constructor(private zone:NgZone,private router: Router,private service:Service) { }
  set(h:number)
 {
   this.totat=h;
   console.log(h);
 }
  ngOnInit() {
    
    this.service.subject.subscribe( data=>{
      this.ngOnDestroy();
      this.zone.runOutsideAngular(() => {
        this.chartGeneration();
      });

    });
   
    this.service.lenged.subscribe(data=>{
      if (data==="Right")
      {  this.chart.legend.disabled=false;
        this.chart.legend.position="right";
        this.chart.legend.itemContainers.template.paddingLeft=10;

      }
      if (data==="Up")
      {  this.chart.legend.disabled=false;
        this.chart.legend.position="top";
        this.chart.legend.itemContainers.template.paddingTop = 0; 
        this.chart.legend.itemContainers.template.paddingBottom = 1;
        this.chart.legend.itemContainers.template.paddingLeft=0;
        this.chart.legend.itemContainers.template.paddingRight=0;
        this.chart.legend.labels.template.maxColumns = 1;
        this.chart.legend.labels.template.maxWidth = 100;


      }
      if (data==="Down")
      {  this.chart.legend.disabled=false;
        this.chart.legend.position="bottom";
        this.chart.legend.itemContainers.template.paddingTop = 0; 
        this.chart.legend.itemContainers.template.paddingBottom = 1;
        this.chart.legend.itemContainers.template.paddingLeft=0;
        this.chart.legend.itemContainers.template.paddingRight=0;
        this.chart.legend.labels.template.maxColumns = 1;
        this.chart.legend.labels.template.maxWidth = 100;


      }
      if (data==="left")
      {
        this.chart.legend.disabled=false;
        this.chart.legend.position="left";
        this.chart.legend.itemContainers.template.paddingLeft=0;

      }
      if (data==="Remove")
      {
        this.pi.legendSettings.Disable=true;
        this.chart.legend.disabled=true;

      }

        });
      this.service.label.subscribe(data=>{
        console.log(data);
        if (data===false)
      {
         this.pi.labels.template.text = "[bold]{Vendor}";
        this.pi.alignLabels = false;
        this.pi.labels.template.bent = false;
        this.pi.labels.template.radius =2;
        this.pi.labels.template.padding(0, 0, 0, 0);
        this.pi.labels.template.fill = am4core.color("gray");
        this.pi.labels.template.maxWidth=6;
      //  this.pi.labels.template.relativeRotation = 90;
        
        
        

      }
      if (data===true)
      {
         this.pi.labels.template.text = "";

      }

      });
      
      this.service.value.subscribe(data=>{
        console.log("vendor  "+ data);
        if (data===true)
      {   console.log("fdgfgtrue");
        this.pi.legendSettings.itemValueText="{Vendor}";
      //  this.pi.labels.template.relativeRotation = 90;
      }
      if (data===false)
      {  console.log("fdgfgfalse");
        this.pi.legendSettings.itemValueText=" ";
        this.chart.validate();
      }

      });

    
  }

  


  
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.chartGeneration();
      console.log(this.chart.dataSource.data);
  });
  }
 ngOnChange()
 {
   
 }

 ngOnDestroy() {
  this.zone.runOutsideAngular(() => {
    if (this.chart) {
      this.chart.dispose();
    }
  });
}
chartGeneration()
{  
  this.chart = am4core.create("Piediv", am4charts.PieChart);
  this.chart.dataSource.url = "http://127.0.0.1:8000/practice/vendors/";
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
 
  let pieSeries = this.chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "litres";
  pieSeries.dataFields.category = "Vendor";
  pieSeries.labels.template.text = "";
  pieSeries.responsive.enabled = true;
  this.pi=pieSeries;
  pieSeries.colors.list = [
    am4core.color("rgb(145,225,203)"),
    am4core.color("rgb(238,204,22)"),
    am4core.color("rgb(235,218,87)"),
    am4core.color("rgb(17,179,154)"),
    am4core.color("rgb(191,212,90)"),
  
    am4core.color("rgb(138,201,28)"),
    am4core.color("rgb(16,127,122)"),
    am4core.color("rgb(11,194,190)"),
    am4core.color("rgb(170,235,236)")
  ];
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;
  pieSeries.legendSettings.itemValueText="[bold {color}]{litres}";
  pieSeries.legendSettings.labelText="[bold {color}]{Vendor}[/]";
      pieSeries.slices.template.events.on("hit", function(ev) {
     if (this.enable==true)
     {
    this.show.emit(true);
    this.router.navigate(['/powerbi'], {fragment:"vendor", replaceUrl: true });;}
  }, this);


  // This creates initial animation
this.chart.legend = new am4charts.Legend();
this.chart.legend.useDefaultMarker = true;
this.chart.legend.position="left";
//this.chart.legend.labels.template.text = "[bold {color}]{Vendor}";

this.chart.legend.itemContainers.template.paddingTop = 2;
this.chart.legend.itemContainers.template.paddingBottom = 2;
this.chart.legend.itemContainers.template.paddingLeft=0;
this.chart.legend.itemContainers.template.paddingRight=0;
this.chart.legend.labels.template.maxWidth = 100;
this.chart.legend.labels.template.maxColumns = 2;
this.chart.legend.labels.template.truncate = true;


const  marker :any= this.chart.legend.markers.template.children.getIndex(0);
marker.cornerRadius(12, 12, 12, 12);
marker.strokeWidth = 2;
marker.strokeOpacity = 1;
marker.stroke = am4core.color("#ccc");


  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = 90;
  pieSeries.hiddenState.properties.startAngle = -90;
  this.pi=pieSeries;
  this.chart.validate();
  this.chart.validateData();
}
 
}


class vendors{
  vendor :any;
  litres:any;
}