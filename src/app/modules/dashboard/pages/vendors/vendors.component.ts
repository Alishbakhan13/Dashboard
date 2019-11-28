
import { Component, OnInit,NgZone ,ViewChild} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {WebService} from '../shared/web.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { interval ,Subject} from 'rxjs';
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  data:any;
  displayedColumns: string[] = ["Vendor","Component","Purchase Amount"]
   dataSource;
   array;
   secondsCounter ;
   getSignal;
   dataSignal
   private chart_Part: am4charts.PieChart;
   private chart_Faulty: am4charts.PieChart;
   private chart_Purchase: am4charts.PieChart;
   totalV;
   totalP;
   totalC;
   setV(h:number)
   {
     this.totalV=h;
    
   }
   setP(h:number)
   {
     this.totalP=h;
     
   }
   setC(h:number)
   {
     this.totalC=h;
    
   }
 
 
   constructor(private zone: NgZone,private recData:WebService) {
     this.dataSignal=0;
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
   
    }
  ngOnInit() {
    const link =this.recData.getVendorTabel();
    const signal= this.recData.getSignal()
    const requestTime = interval(1000);
    link.subscribe(
      (response)=>
      {
        this.array=response;
        this.dataSource = new MatTableDataSource(this.array);
        this.dataSource.paginator = this.paginator;
      },
      (error)=>
      {
        console.log("error");
      }

    );

    this.secondsCounter=requestTime.subscribe(n =>{
        this.getSignal=signal.subscribe( data=>
        {  
          if (this.dataSignal!=data)
          {
            this.dataSignal=data;
            this.destroy();
            this.zone.runOutsideAngular(() => {
            this.Chartgenerate();
            });
            link.subscribe(
              (response)=>
              {
                this.array=response;
                this.dataSource = new MatTableDataSource(this.array);
                this.dataSource.paginator = this.paginator;
              },
              (error)=>
              {
                console.log("error");
              }
        
            );

                
            
          
         }
        });
      
    }
    );
  
     this.recData.legend.subscribe((gg)=>{
      if (gg===true)
      {
        this.chart_Part.legend.disabled=false;
        this.chart_Part.legend.position="bottom";
        this.chart_Part.legend.itemContainers.template.paddingLeft=0;

        this.chart_Faulty.legend.disabled=false;
        this.chart_Faulty.legend.position="bottom";
        this.chart_Faulty.legend.itemContainers.template.paddingLeft=0;


        this.chart_Purchase.legend.disabled=false;
        this.chart_Purchase.legend.position="bottom";
        this.chart_Purchase.legend.itemContainers.template.paddingLeft=0;
      }

      if (gg===false)
      {
        this.chart_Part.legend.disabled=true;
        this.chart_Part.legend.position="bottom";
        this.chart_Part.legend.itemContainers.template.paddingLeft=0;

        this.chart_Faulty.legend.disabled=true;
        this.chart_Faulty.legend.position="bottom";
        this.chart_Faulty.legend.itemContainers.template.paddingLeft=0;


        this.chart_Purchase.legend.disabled=true;
        this.chart_Purchase.legend.position="bottom";
        this.chart_Purchase.legend.itemContainers.template.paddingLeft=0;
      }
     });
   
    
  }
  
 
  
  ngAfterViewInit() {
    
    am4core.options.commercialLicense = true;
    this.zone.runOutsideAngular(() => {
    this.Chartgenerate();  
    });   
  }
  destroy()
  {
    this.zone.runOutsideAngular(() => {
      if (this.chart_Part) {
        this.chart_Part.dispose();
      }
      if (this.chart_Faulty) {
        this.chart_Faulty.dispose();
      }
      if (this.chart_Purchase) {
        this.chart_Purchase.dispose();
      }
    });
   

  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart_Part) {
        this.chart_Part.dispose();
      }
      if (this.chart_Faulty) {
        this.chart_Faulty.dispose();
      }
      if (this.chart_Purchase) {
        this.chart_Purchase.dispose();
      }
    });
    this.secondsCounter.unsubscribe();
    this.getSignal.unsubscribe();
  }
Chartgenerate()
{   this.zone.runOutsideAngular(() => {
  let chart_Part = am4core.create("Piediv1", am4charts.PieChart);
  let chart_Faulty=am4core.create("Piediv2", am4charts.PieChart);
  let chart_Purchase=am4core.create("Piediv3", am4charts.PieChart);
  chart_Part.dataSource.url="http://127.0.0.1:8000/dashboard/vendors1/";
  chart_Faulty.dataSource.url = "http://127.0.0.1:8000/dashboard/vendors2/";
  
  chart_Purchase.dataSource.url ="http://127.0.0.1:8000/dashboard/vendors3/";
  let see = new Subject<number>();
  //for making request every 5 th second
  //this.chart.dataSource.reloadFrequency = 5000;
  var total;
   chart_Part.dataSource.events.on("parseended", function(ev) {
    // parsed data is assigned to data source's `data` property
    total=ev.target.data.length;
    console.log(total);
    see.next(total);
   // this.set(ev.target.data.length);
   
     
  });
 let g =see.subscribe((value)=>{
  this.setV(value);
  g.unsubscribe();
 });
  let pieSeries = chart_Part.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "value";
  pieSeries.dataFields.category = "display";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;
  pieSeries.labels._template.text="";
  pieSeries.legendSettings.itemValueText=" ";
  // for adding lenged
  chart_Part.legend = new am4charts.Legend();
  chart_Part.legend.useDefaultMarker = true;
  chart_Part.legend.position="left";
  chart_Part.legend.labels.template.text = "[bold {color}]{display}";
  chart_Part.legend.labels.template.maxColumns=3;
  chart_Part.legend.itemContainers.template.paddingTop = 1;
  chart_Part.legend.itemContainers.template.paddingLeft = 1;
  chart_Part.legend.itemContainers.template.paddingBottom = 1;
  chart_Part.legend.itemContainers.template.paddingRight=1;
  chart_Part.legend.labels.template.maxWidth =3 ;
  chart_Part.legend.disabled=true;

   // for adding lenged
   chart_Purchase.legend = new am4charts.Legend();
   chart_Purchase.legend.useDefaultMarker = true;
   chart_Purchase.legend.position="left";
   chart_Purchase.legend.labels.template.text = "[bold {color}]{display}";
   chart_Purchase.legend.labels.template.maxColumns=3;
   chart_Purchase.legend.itemContainers.template.paddingTop = 1;
   chart_Purchase.legend.itemContainers.template.paddingLeft = 1;
   chart_Purchase.legend.itemContainers.template.paddingBottom = 1;
   chart_Purchase.legend.itemContainers.template.paddingRight=1;
   chart_Purchase.legend.labels.template.maxWidth =3 ;
   chart_Purchase.legend.disabled=true;
  // This  setting colors 
    let see1 = new Subject<number>();
    //for making request every 5 th second
    //this.chart.dataSource.reloadFrequency = 5000;
    /*
    var totalP;
    chart_Purchase.dataSource.events.on("parseended", function(ev) {
      // parsed data is assigned to data source's `data` property
      totalP=0;
      ev.target.data.array.forEach(element => {

        totalP=totalP+element["value"];
        console.log(total);
        see1.next(total);
      });
    // this.set(ev.target.data.length);
    
      
    });
  let gG =see.subscribe((value)=>{
    this.setP(value);
    gG.unsubscribe();
  }); */
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
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
  // for editing shape of  legend button
  //let marker = chartPie.legend.markers.template.children.getIndex(0);
    //marker.cornerRadius(15, 15, 15, 15);
    //marker.strokeWidth = 1;
   // marker.strokeOpacity = 1;
   // marker.stroke = am4core.color("#ccc");


  this.chart_Part=chart_Part;

  let pieSeries2 = chart_Faulty.series.push(new am4charts.PieSeries());
  pieSeries2.dataFields.value = "value";
  pieSeries2.dataFields.category = "display";
  pieSeries2.slices.template.stroke = am4core.color("#fff");
  pieSeries2.slices.template.strokeWidth = 2;
  pieSeries2.slices.template.strokeOpacity = 1;
  pieSeries2.labels._template.text="";
  pieSeries2.labels._template.fontSize=10;
  pieSeries2.legendSettings.itemValueText=" ";
  // for adding lenged
 
 
  // This  setting colors 
  pieSeries2.colors.list = [
    am4core.color("rgb(145,225,203)"),
    am4core.color("rgb(238,204,22)"),
    am4core.color("rgb(235,218,87)"),
    am4core.color("rgb(17,179,154)"),
    am4core.color("rgb(191,212,90)"),
  
    am4core.color("rgb(138,201,28)"),
    am4core.color("rgb(16,127,122)"),
    am4core.color("rgb(11,194,190)"),
    am4core.color("rgb(170,235,236)")];
  pieSeries2.hiddenState.properties.opacity = 1;
  pieSeries2.hiddenState.properties.endAngle = -90;
  pieSeries2.hiddenState.properties.startAngle = -90;
  // for editing shape of  legend button
  

  //  marker.cornerRadius(20, 20, 20, 20);
    //marker.strokeWidth = 1;
    //marker.strokeOpacity = 1;
    //marker.stroke = am4core.color("#ccc");
   


 

  let pieSeries3 = chart_Purchase.series.push(new am4charts.PieSeries());
  pieSeries3.dataFields.value = "value";
  pieSeries3.dataFields.category = "dsiplay";
  pieSeries3.slices.template.stroke = am4core.color("#fff");
  pieSeries3.slices.template.strokeWidth = 2;
  pieSeries3.slices.template.strokeOpacity = 1;
  pieSeries3.labels._template.text="";
  pieSeries3.labels._template.fontSize=10;
  pieSeries3.legendSettings.itemValueText=" ";
  // for adding lenged
  chart_Faulty.legend = new am4charts.Legend();
  chart_Faulty.legend.useDefaultMarker = true;
  chart_Faulty.legend.position="bottom";
  chart_Faulty.legend.labels.template.text = "[bold {color}]{display}";
  chart_Faulty.legend.labels.template.maxColumns=3;
  chart_Faulty.legend.itemContainers.template.paddingTop = 1;
  chart_Faulty.legend.itemContainers.template.paddingLeft = 1;
  chart_Faulty.legend.itemContainers.template.paddingBottom = 1;
  chart_Faulty.legend.itemContainers.template.paddingRight=1;
  chart_Faulty.legend.labels.template.maxWidth = 50;
  chart_Faulty.legend.disabled=true;
  // This  setting colors 
  


  pieSeries3.colors.list = [
    am4core.color("rgb(145,225,203)"),
    am4core.color("rgb(238,204,22)"),
    am4core.color("rgb(235,218,87)"),
    am4core.color("rgb(17,179,154)"),
    am4core.color("rgb(191,212,90)"),
  
    am4core.color("rgb(138,201,28)"),
    am4core.color("rgb(16,127,122)"),
    am4core.color("rgb(11,194,190)"),
    am4core.color("rgb(170,235,236)")];
  pieSeries3.hiddenState.properties.opacity = 1;
  pieSeries3.hiddenState.properties.endAngle = -90;
  pieSeries3.hiddenState.properties.startAngle = -90;
  // for editing shape of  legend button
  //let marker = chartPie.legend.markers.template.children.getIndex(0);
   //marker.cornerRadius(15, 15, 15, 15);
    //marker.strokeWidth = 1;
   // marker.strokeOpacity = 1;
   // marker.stroke = am4core.color("#ccc");
   const  marker :any= this.chart_Part.legend.markers.template.children.getIndex(0);
   marker.cornerRadius(12, 12, 12, 12);
   marker.strokeWidth = 2;
   marker.strokeOpacity = 1;
   marker.stroke = am4core.color("#ccc");
   const  marker2 :any= chart_Faulty.legend.markers.template.children.getIndex(0);
   marker2.cornerRadius(12, 12, 12, 12);
   marker2.strokeWidth = 2;
   marker2.strokeOpacity = 1;
   marker2.stroke = am4core.color("#ccc");

   const  marker3 :any= chart_Purchase.legend.markers.template.children.getIndex(0);
   marker3.cornerRadius(12, 12, 12, 12);
   marker3.strokeWidth = 2;
   marker3.strokeOpacity = 1;
   marker3.stroke = am4core.color("#ccc");
   let see2 = new Subject<number>();
  //for making request every 5 th second
  //this.chart.dataSource.reloadFrequency = 5000;
   var total1;
   chart_Purchase.dataSource.events.on("parseended", function(ev) {
    // parsed data is assigned to data source's `data` property
    total1=ev.target.data.length;
    ev.target.data.forEach(element => {
      total1=element['value']+total1;
    });
    console.log(total1);
    see2.next(Math.floor(total1));
   // this.set(ev.target.data.length);
   
     
  });
 let gG =see2.subscribe((value)=>{
  this.setP(value);
  gG.unsubscribe();
 });

 let see3 = new Subject<number>();
 //for making request every 5 th second
 //this.chart.dataSource.reloadFrequency = 5000;
  var total3;
  chart_Faulty.dataSource.events.on("parseended", function(ev) {
   // parsed data is assigned to data source's `data` property
   total3=ev.target.data.length;
   ev.target.data.forEach(element => {
     total3=element['value']+total3;
   });
   console.log(total3);
   see3.next(Math.floor(total3));
  // this.set(ev.target.data.length);
  
    
 });
let g3 =see3.subscribe((value)=>{
 this.setC(value);
 g3.unsubscribe();
});
  this.chart_Purchase=chart_Purchase;
  this.chart_Faulty=chart_Faulty;

});
}
}



