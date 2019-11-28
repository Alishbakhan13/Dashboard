import { Component,OnInit,Output,EventEmitter ,Input } from '@angular/core';
import { enableBindings } from '@angular/core/src/render3';
import { Service } from '../shared/shelf.service';
import { interval ,Subject} from 'rxjs';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Output() show = new EventEmitter<boolean>();
  @Input()  enable;
  data:any;
  secondsCounter;


constructor(private service:Service) {
  this.data=0;
}


ngOnInit()
{ const intervalTime= interval(1000);
  const link =this.service.getData();
  const link2= this.service.getSignal()
   link.subscribe(
   data =>{
    
     console.log(data);
   },
   error=>
   {
    console.log("dfgfg");
   }
   );
   this.secondsCounter=intervalTime.subscribe(n =>{
    link2.subscribe( data=>
      {  
        if (this.data!=data)
        {
          this.data=data;
          this.service.subject.next(this.data);
        console.log(data);
        this.service.see.next(6);
       }
      });
    
  }
  );
   
  
}

set(event)
{
  this.show.emit(event);
}
ngOnDestroy() {
  this.secondsCounter.unsubscribe();
}
}
