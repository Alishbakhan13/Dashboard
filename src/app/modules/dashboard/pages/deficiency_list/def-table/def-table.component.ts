import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {WebService} from '../../shared/web.service';
import {Service} from '../../shared/service';
@Component({
  selector: 'app-def-table',
  templateUrl: './def-table.component.html',
  styleUrls: ['./def-table.component.css']
})
export class DefTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  displayedColumns: string[] = ['PartID','Vendor', 'Reason'];
  dataSource: MatTableDataSource<{}>;
  array;
  table;
  unserv;
  constructor(private recData:WebService,private service:Service) 
  {

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
    this.unserv=this.service.data2.subscribe(
    (response)=>{
    this.table.unsubscribe();
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
