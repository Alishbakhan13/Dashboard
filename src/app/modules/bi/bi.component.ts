
import { Component,ChangeDetectorRef,OnInit  } from '@angular/core';
import {Service} from './shared/shelf.service';
@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.css']
})
export class BiComponent implements OnInit {
    ngOnInit() {}
    public  enable;
    public  status;
    seasons=['Right','Up','Down','Remove'];
    checked=true;
    favoriteSeason: string;

    constructor(private cd: ChangeDetectorRef,private service:Service)
      {
        this.status=false;
      }

    set()
      {
        this.status=true;
        // as   ince false .. angualr doesnt  render   it again unless explicity called for rendering again 
        //manually telling to  check veiw 
        this.cd.detectChanges();
      }

    sethide()
      {
        this.status=false;
        this.cd.detectChanges();
      }

  checkCheckBoxvalue(event)
      {  this.status=true;
        this.cd.detectChanges();
        this.enable=event.checked;
        
        console.log(event.checked);
      }
  showtables(event)
      { 
        this.status=event.checked;
      }
  vale(event)
    {  this.service.lenged.next(event);
      console.log(event);
    }
  label(event)
    { this.service.label.next(event.checked);
      console.log(event)

    }
  value(event)
    {
    this.service.value.next(event.checked);
    console.log(event)

    }
}

