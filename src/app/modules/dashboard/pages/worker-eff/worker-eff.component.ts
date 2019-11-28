import { NgModule, Component, enableProdMode ,OnInit} from '@angular/core';
import { DxChartModule } from 'devextreme-angular';
import { ClusterModel, ClusterFields } from './cluster.model';
import {WebService} from '../shared/web.service';
import { interval ,Subject} from 'rxjs';
@Component({
  selector: 'app-worker-eff',
  templateUrl: './worker-eff.component.html',
  styleUrls: ['./worker-eff.component.css']
})
export class WorkerEffComponent implements OnInit {
  
  title: string = "Worker Performance";
    dataSource:ClusterModel[];
		correlationSource: ClusterFields[];
		secondsCounter ;
		getSignal;
		dataSignal
    getdata;
    total;
    poor;
    best;

	ngOnInit(){
		const link =this.recData.getWorkeEff();
    const signal= this.recData.getSignal()
    const requestTime = interval(1000);
    this.getdata=link.subscribe(
      (response)=>
      {
        this.dataSource = response[0];
        this.correlationSource=response[1];
        this.total=this.dataSource.length;
        this.poor=0;
        this.best=0;
        this.dataSource.forEach(element => {
          if (element['tag1'])
          {
          this.poor=this.poor+1;
          }
          if (element['tag4'])
          {
          this.best=this.best+1;
          }
          console.log(this.poor);
          
        });

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
            this.getdata=link.subscribe(
              (response)=>
              {
                this.dataSource = response[0];
                this.correlationSource=response[1];
                
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
	constructor(private recData:WebService) {
	this.dataSignal=0;
	}
	destroy()
	{
		this.getdata.unsubscribe();
    this.getSignal.unsubscribe();
	}

	ngOnDestroy() 
	{
		this.secondsCounter.unsubscribe();
		this.getdata.unsubscribe();
		this.getSignal.unsubscribe();
	}
	customizeTooltip(arg: any) {
			return {
					text: arg.point.tag + '<br/>Components: ' + arg.argumentText + '<br/>Time: ' + arg.valueText 
			};
	}

	argumentCustomizeText(args: any) {
			return args.value ;
	}

	valueCustomizeText(args: any) {
			return args.value 
	}

	onSeriesClick(e: any) {
			var series = e.target;
			if (series.isVisible()) {
					series.hide();
			} else {
					series.show();
			}
	}

    

}
