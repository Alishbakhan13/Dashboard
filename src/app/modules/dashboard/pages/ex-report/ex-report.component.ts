import { Component, OnInit } from '@angular/core';
import {WebService} from '../shared/web.service';
import {Service} from '../shared/service';
import { interval ,Subject} from 'rxjs';
@Component({
  selector: 'app-ex-report',
  templateUrl: './ex-report.component.html',
  styleUrls: ['./ex-report.component.css']
})
export class ExReportComponent implements OnInit {
  
  secondsCounter ;
  getSignal;
  dataSignal;
  getdata;
  array:any;
  constructor(private recData:WebService,private service:Service) 
  {this.dataSignal=0; }

  ngOnInit() {
    const link =this.recData.getReportFaultyCompntship();
    this.getdata=link.subscribe(
      (response)=>
      { 
        this.array=response;
        this.service.data.next(this.array);
        
      },
      (error)=>
      {
        console.log("error");
      }

    );
    const signal= this.recData.getSignal();
    const requestTime = interval(1000);
    this.secondsCounter=requestTime.subscribe(n =>{
        this.getSignal=signal.subscribe( data=>
        {  
          if (this.dataSignal!=data)
          {
            this.dataSignal=data;
            this.destroy();
            this.getdata=link.subscribe(
              (response)=>
              { this.service.data.next(response);
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
  this.getdata.unsubscribe();
  //this.service.data.unsubscribe();
  }
  ngOnDestroy() {
   
    this.secondsCounter.unsubscribe();
    this.getSignal.unsubscribe();
    //this.service.data.unsubscribe();
  }

}
