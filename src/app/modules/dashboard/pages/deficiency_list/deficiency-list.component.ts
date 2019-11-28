import { Component, OnInit } from '@angular/core';
import {WebService} from '../shared/web.service';
import {Service} from '../shared/service';
import { interval ,Subject} from 'rxjs';
@Component({
  selector: 'app-deficiency-list',
  templateUrl: './deficiency-list.component.html',
  styleUrls: ['./deficiency-list.component.css']
})
export class DeficiencyListComponent implements OnInit {
  secondsCounter ;
  getSignal;
  dataSignal;
  getdata;
  array;
  constructor(private recData:WebService,private service:Service) 
  {this.dataSignal=0; 
  }
  ngOnInit() {
    const link =this.recData.getDeficiencyReport();
    this.getdata=link.subscribe(
      (response)=>
      { 
        this.array=response;
        this.service.data2.next(this.array);
        
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
              { this.service.data2.next(response);
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
