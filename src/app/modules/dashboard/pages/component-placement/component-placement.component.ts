import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {WebService} from '../shared/web.service';
import {Service} from '../shared/service';

@Component({
  selector: 'app-component-placement',
  templateUrl: './component-placement.component.html',
  styleUrls: ['./component-placement.component.css']
})
export class ComponentPlacementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  displayedColumns: string[] = ['Rule','Support', 'Confidence','Lift'];
  dataSource: MatTableDataSource<{}>;
  array=[[1,2,3,4],[1,2,3,4]];
  table;
  unserv;
  constructor(private recData:WebService,private service:Service) 
  {

  }

  ngOnInit() {
    // Define the appropriate function with the resoective  django server link to get data 
    // from it in  webservices file 
    const link =this.recData.getDeficientTabel();
    this.table=link.subscribe(
      (response)=>
      {
      //this.array=response;
        //console.log(response);
      this.dataSource = new MatTableDataSource(this.array);
      this.dataSource.paginator = this.paginator;
      },
      (error)=>
      {
        console.log("error");
      }
    
    );
    this.unserv=this.service.data2.subscribe(
    (response)=>{
    this.table.unsubscribe();
    this.table=link.subscribe(
      (response)=>
      {
        //this.array=response;
        console.log(response);
        this.dataSource = new MatTableDataSource(this.array);
        this.dataSource.paginator = this.paginator;
      },
      (error)=>
      {
        console.log("error");
      }
    
    );
    },
    (error)=>
    {
      console.log(error);
    });
    

  }
  ngOnDestroy()
  {
    this.table.unsubscribe();
    this.unserv.unsubscribe();

  }
  
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
   
    }
}
