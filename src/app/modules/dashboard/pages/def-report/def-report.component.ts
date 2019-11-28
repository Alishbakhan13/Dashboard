import {Component, OnInit , ViewChild,Inject, Output } from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';
import  * as CanvasJS from  '../shared/canvas';
import {WebService} from '../shared/web.service';
import { interval ,Subject} from 'rxjs';
@Component({
  selector: 'app-def-report',
  templateUrl: './def-report.component.html',
  styleUrls: ['./def-report.component.css']
})
export class DefReportComponent implements OnInit {
	displayedColumns: string[] = ['PartID','Vendor', 'Reason'];
	
	chart;
	dataSource ;
	array;
	secondsCounter;
	getSignal;
	table;
	dataSignal;
	getData;
	chartdata;
	data;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    constructor(private recData:WebService)
    {
    this.dataSignal=0;
    }
  ngOnInit() {
		const link =this.recData.getDeficientTabel();
this.table=link.subscribe(
	(response)=>
	{
		this.array=response;
		console.log(response);
		this.dataSource = new MatTableDataSource(this.array);
		this.dataSource.paginator = this.paginator;
	},
	(error)=>
	{
		console.log("error");
	}

);
		const getdata=this.recData.getDeficientComp();
		
	
		CanvasJS.addColorSet("greenShades",
		[//colorSet Array     am4core.color("rgb(2,78,134)"),
	   	 "rgb(145,225,203)",
				"rgb(238,204,22)",
				"rgb(235,218,87)",
				 "rgb(17,179,154)",
				 "rgb(191,212,90)",
			   "rgb(138,201,28)",
				  "rgb(16,127,122)",
				  "rgb(11,194,190)",
				  "rgb(170,235,236)"]        
		);
		this.dataSource = new MatTableDataSource(this.array);
		this.dataSource.paginator = this.paginator;
    var chart = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	//theme: "light2", // "light1", "light2", "dark1", "dark2"
	colorSet: "greenShades",
	title:{
	//	text: "Top Oil Reserves"
	},
	axisY: {
		title: "Frequency"
	},
	data: [{
		type: "column",
		showInLegend: true,
		legendMarkerColor: "grey",
		legendText: "Part ID",
		grid:offscreenBuffering
	}]
},

);

this.getData=getdata.subscribe(
	(response)=>
	{
		this.chartdata=response;
		this.data=response;
		chart.options.data[0].dataPoints=this.chartdata;
		chart.render();
		console.log(response);
	},
	(error)=>
	{
		console.log("error");
	} );



//updating dynamically

const signal= this.recData.getSignal()
const requestTime = interval(1000);
this.secondsCounter=requestTime.subscribe(n =>{
	this.getSignal=signal.subscribe( data=>
	{  
		if (this.dataSignal!=data)
		{
			this.dataSignal=data;
			this.destroy();
			this.getData=getdata.subscribe(
				(response)=>
				{
					chart.options.data[0].dataPoints=response;
					//chart.render();
				},
				(error)=>
				{
					console.log("error");
				}
	
			);
			this.table=link.subscribe(
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

	}
destroy()
{
	this.table.unsubscribe();
	this.getData.unsubscribe();
}

ngOnDestroy()
{
	this.secondsCounter.unsubscribe();
	this.getSignal.unsubscribe();
	this.table.unsubscribe();
	this.getData.unsubscribe();
}
}
