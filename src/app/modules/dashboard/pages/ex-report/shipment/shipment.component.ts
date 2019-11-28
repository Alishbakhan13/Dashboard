import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4themes_kelly from "@amcharts/amcharts4/themes/kelly.js";
//import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import {Service} from '../../shared/service';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
  private Chart12: am4charts.PieChart;
  unserv;
  constructor(private zone:NgZone,private service:Service) { }
ngAfterViewInit() {
  this.unserv=this.service.data.subscribe(
    (response)=>{
      this.destroy();
      console.log("dfd");
      this.genrateChart(response[3]);
    },
    (error)=>
    {console.log(error);
    });
 
   
  }
  destroy()
  {
    this.zone.runOutsideAngular(() => {
      if (this.Chart12) {
        this.Chart12.dispose();
      }
    });
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.Chart12) {
        this.Chart12.dispose();
      }
    });

    this.unserv.unsubscribe();
  }
  ngOnInit() {
  }
  genrateChart(data)
  {
    this.zone.runOutsideAngular(() => {
     
      let ChartPie = am4core.create("shipment", am4charts.PieChart);
      
      ChartPie.data =data;
      ChartPie.innerRadius = am4core.percent(50);

      let pieSeries1 = ChartPie.series.push(new am4charts.PieSeries());
      pieSeries1.dataFields.value = "litres";
      pieSeries1.dataFields.category = "country";
      pieSeries1.slices.template.stroke = am4core.color("#fff");
      pieSeries1.slices.template.strokeWidth = 2;
      pieSeries1.slices.template.strokeOpacity = 1;
      pieSeries1.labels.template.text="";
      var label = pieSeries1.createChild(am4core.Label);
      label.text ="1000";
      label.horizontalCenter = "middle";
      label.verticalCenter = "middle";
      label.text.fontcolor("gray");
      label.text.bold();
      label.fontSize = 25;

      // pieSeries.slices.template.events.on("hit", function(ev) {
      //   chartPie.closeAllPopups();
      //   chartPie.openPopup("We clicked on <strong>" + ev.target.dataItem.dataContext.country + "</strong>");
      // });

      // This creates initial animation
      pieSeries1.colors.list =  [    am4core.color("rgb(145,225,203)"),
      am4core.color("rgb(238,204,22)"),
      am4core.color("rgb(235,218,87)"),
      am4core.color("rgb(17,179,154)"),
      am4core.color("rgb(191,212,90)"),
    
      am4core.color("rgb(138,201,28)"),
      am4core.color("rgb(16,127,122)"),
      am4core.color("rgb(11,194,190)"),
      am4core.color("rgb(170,235,236)")];
      pieSeries1.hiddenState.properties.opacity = 1;
      pieSeries1.hiddenState.properties.endAngle = -90;
      pieSeries1.hiddenState.properties.startAngle = -90;
  
    
      this.Chart12=ChartPie;
     
        });
        
  }

}