import { Component, OnInit,NgZone ,Input,Output,EventEmitter} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Router, RouterLink} from '@angular/router';
//import am4themes_kelly from "@amcharts/amcharts4/themes/kelly.js";
//import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
//am4core.useTheme(am4themes_kelly);
import { Service } from '../../shared/shelf.service';
import { Observable, Subject } from 'rxjs';
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-reorder-c',
  templateUrl: './reorder-c.component.html',
  styleUrls: ['./reorder-c.component.css']
})

export class ReorderCComponent implements OnInit {
  total;
  set(h:number)
  {
    this.total=h;
    console.log(h);
  }
  @Input() enable;
  @Output() show = new EventEmitter<boolean>();
  private chart: am4charts.XYChart;
  private  seriess; 
  constructor(private zone: NgZone,private router: Router,private service:Service) {}
  ngOnInit() {

    this.service.see.subscribe(g=>{
    this.ngOnDestroy();
    this.chartgenerate();
  });
 
}
ngOnDestroy() {
  this.zone.runOutsideAngular(() => {
    if (this.chart) {
      this.chart.dispose();
    }
  });
}
  ngAfterViewInit() {
  this.chartgenerate();
}

  chartgenerate()
  {
    this.zone.runOutsideAngular(() => {
   
    
      let chart3 = am4core.create("linediv2", am4charts.XYChart);
      chart3.fontSize=12;
      chart3.dataSource.url = "http://127.0.0.1:8000/practice/reorder/";
      let categoryAxis2 = chart3.xAxes.push(new am4charts.CategoryAxis());
      let see = new Subject<number>();
      
      var total;
       chart3.dataSource.events.on("parseended", function(ev) {
        // parsed data is assigned to data source's `data` property
        total=ev.target.data.length;
        see.next(total);
       // this.set(ev.target.data.length);
       
         
      });
     let g =see.subscribe((value)=>{
      this.set(value);
      g.unsubscribe();
     });
      categoryAxis2.dataFields.category = "item";
      categoryAxis2.renderer.grid.template.location = 0;
      categoryAxis2.renderer.minGridDistance = 30;
      categoryAxis2.renderer.grid.template.disabled = true;
      var label = categoryAxis2.renderer.labels.template;
      label.truncate = true;
      label.wrap = true;
      label.maxWidth = 80;
      let valueAxis3 = chart3.yAxes.push(new am4charts.ValueAxis());
        valueAxis3.renderer.baseGrid.disabled = true;
        let series3 = chart3.series.push(new am4charts.ColumnSeries());
        series3.showOnInit=false;
        series3.dataFields.valueY = "Faulty";
        series3.dataFields.categoryX = "item";
        series3.name = "Faulty";
        series3.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series3.columns.template.fillOpacity = .8;
        series3.columns.template.fill =  am4core.color("rgb(235,218,87)");
        series3.columns.template.events.on("hit", function(ev) {
          if (this.enable==true)
         {
        this.show.emit(true);
        this.router.navigate(['/powerbi'], {fragment:"reorder", replaceUrl: true });;}
      }, this);
       this.seriess=series3;
        //series3.columns.template.adapter.add("fill", function(fill, target) {
          //return chart3.colors.getIndex(target.dataItem.index);
        //});
        let columnTemplat33= series3.columns.template;
        columnTemplat33.strokeWidth = 0;
        columnTemplat33.strokeOpacity = 0;
        this.chart=chart3;
      });

  }



}
