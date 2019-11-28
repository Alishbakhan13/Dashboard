import { Component, OnInit,NgZone,Input,Output,EventEmitter } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4themes_kelly from "@amcharts/amcharts4/themes/kelly.js";
//import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import {Router, RouterLink} from '@angular/router';
import { enableBindings } from '@angular/core/src/render3';
import { Service } from '../../shared/shelf.service';
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-activity-c',
  templateUrl: './activity-c.component.html',
  styleUrls: ['./activity-c.component.css']
})
export class ActivityCComponent implements OnInit {
  private chart: am4charts.PieChart;
  @Input() enable;
  @Output() show = new EventEmitter<boolean>();
  pi ;
  

constructor(private zone: NgZone,private router: Router,private service:Service) {}

ngAfterViewInit() {
  this.zone.runOutsideAngular(() => {
    this.ChartGenerate();
    
      });
   
      
}

ChartGenerate()
{
  let chartPie = am4core.create("Piediv2", am4charts.PieChart);
    chartPie.dataSource.url = "http://127.0.0.1:8000/practice/activity/";
    chartPie.dataSource.load();
    chartPie.validate();
    chartPie.validateData();
    let pieSeries = chartPie.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    //to remove  the  connected pie chart label
    pieSeries.labels._template.text="";
    // This creates initial animation
    pieSeries.legendSettings.itemValueText="[bold {color}]{litres}";
    
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.slices.template.events.on("hit", function(ev) {
      if (this.enable==true)
      {
     this.show.emit(true);
     this.router.navigate(['/powerbi'], {fragment:"activity", replaceUrl: true });;}
   }, this);
    // for setting labels  of the leged value
 
    pieSeries.legendSettings.labelText="";
    this.pi=pieSeries;
    // This creates initial animation
    chartPie.legend = new am4charts.Legend();
  chartPie.legend.useDefaultMarker = true;
    chartPie.legend.position="left";

    chartPie.legend.itemContainers.template.paddingTop = 0;
chartPie.legend.itemContainers.template.paddingBottom = 0;
chartPie.legend.itemContainers.template.paddingLeft = 0;
chartPie.legend.itemContainers.template.paddingRight = 0;

chartPie.legend.labels.template.text = "[bold {color}]{country}[/]";
chartPie.legend.labels.template.maxWidth = 10;
chartPie.legend.labels.template.truncate = true;
     // for setting labels  of the legend
    //chartPie.legend.labels.template.text = "[bold {color}]{country}";
    
    
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
    
    

    chartPie.validate();
    chartPie.validateData();
    
    const  marker :any= chartPie.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 2;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
   
    this.chart=chartPie;
}
ngOnDestroy() {
  this.zone.runOutsideAngular(() => {
    if (this.chart) {
      this.chart.dispose();
    }
  });
}
ngOnInit() {
  //this.service.subject.subscribe( data=>{
    //console.log("dfdfdfdf");
    //this.chart.dataSource.url = "http://127.0.0.1:8000/practice/activity/";
    //this.pi.slices.template.showOnInit = false;
    //this.pi.slices.template.showOnInit = true;
    //this.chart.dataSource.load();
    //this.chart.validate();
    //this.chart.validateData();
    //console.log(this.chart.dataSource.data);
   
  
 /* this.chart.animate({
    "from": 0,
    "to": 5,
    "property": "fillOpacity"
  }, 
   7);*/
 
   //this.chart.legend.disabled=true;

 
  
   //this.pi.labels.template.text="[bold {color}]{litres}";
   
   

   

  //});
  this.service.see.subscribe(g=>{
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
      console.log(data);
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