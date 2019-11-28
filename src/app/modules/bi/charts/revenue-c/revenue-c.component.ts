import { Component, OnInit,NgZone, Input,EventEmitter,Output } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4themes_kelly from "@amcharts/amcharts4/themes/kelly.js";
//import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import {Router, RouterLink} from '@angular/router';
import { enableBindings } from '@angular/core/src/render3';
import { Service } from '../../shared/shelf.service';
import { Observable, Subject } from 'rxjs';
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-revenue-c',
  templateUrl: './revenue-c.component.html',
  styleUrls: ['./revenue-c.component.css']
})
export class RevenueCComponent implements OnInit {
  private chart: am4charts.PieChart
   @Input() enable;
   @Output() show = new EventEmitter<boolean>();
    pi;
    total;
    set(h:number)
    {
      this.total=h;
      console.log(h);
    }
  constructor(private zone: NgZone,private router: Router,private service:Service) {}
  
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
       this.ChartGenerate();
    
        });
        
  }
  ChartGenerate()
  {
    let chartPie = am4core.create("Piediv339", am4charts.PieChart);
    chartPie.dataSource.url = "http://127.0.0.1:8000/practice/revenue/";
    chartPie.dataSource.load();
    let pieSeries = chartPie.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    let see = new Subject<number>();
  
    //for making request every 5 th second
    //this.chart.dataSource.reloadFrequency = 5000;
    var total=0;
     chartPie.dataSource.events.on("parseended", function(ev) {
      // parsed data is assigned to data source's `data` property
     
      ev.target.data.forEach(element => {
        total=element['litres']+total;
      });
      see.next(Math.floor(total));
     // this.set(ev.target.data.length);
     
       
    });
   let g =see.subscribe((value)=>{
    this.set(value);
    g.unsubscribe();
   });
 
    pieSeries.slices.template.events.on("hit", function(ev) {
      if (this.enable==true)
      {
     this.show.emit(true);
     this.router.navigate(['/powerbi'], {fragment:"revenue", replaceUrl: true });;}
   }, this);
    //to remove  the  connected pie chart label
    pieSeries.labels._template.text="";
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    // for setting labels  of the leged value
    pieSeries.legendSettings.itemValueText="[bold {color}]{litres}";
    // This creates initial animation
    chartPie.legend = new am4charts.Legend();
    chartPie.legend.useDefaultMarker = true;
    chartPie.legend.position="left";
     // for setting labels  of the legend
    chartPie.legend.labels.template.text = "[bold {color}]{country}";
    
    chartPie.legend.itemContainers.template.paddingTop = 1;
    chartPie.legend.itemContainers.template.paddingLeft = 10;
    chartPie.legend.itemContainers.template.paddingBottom = 1;
    chartPie.legend.labels.template.maxWidth = 100;
    
    
   
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
    
  
    const  marker :any= chartPie.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 2;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    chartPie.validate();
    chartPie.validateData();
    this.chart=chartPie;
  

    this.pi=pieSeries;
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
  ngOnInit() {
    this.service.subject.subscribe( data=>{
      this.ngOnDestroy();
      this.zone.runOutsideAngular(() => {
        this.ChartGenerate();
     
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
        console.log("revenue"+ data);
        if (data===false)
      {
         this.pi.labels.template.text = "[bold]{country}";
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
        console.log("revenue"+ data);
        if (data===true)
      {   console.log("fdgfgtrue");
        this.pi.legendSettings.itemValueText=" ";
      //  this.pi.labels.template.relativeRotation = 90;
      }
      if (data===false)
      {  console.log("fdgfgfalse");
        this.pi.legendSettings.itemValueText=" ";
        this.chart.validate();
      }

      });

    
  }

  
  }