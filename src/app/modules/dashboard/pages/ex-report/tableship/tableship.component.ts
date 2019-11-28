import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {WebService} from '../../shared/web.service';
import {Service} from '../../shared/service';
@Component({
  selector: 'app-tableship',
  templateUrl: './tableship.component.html',
  styleUrls: ['./tableship.component.css']
})
export class TableshipComponent implements OnInit {

  displayedColumns: string[] = ["Vendor","Component","Purchase Amount"];
  dataSource;
  array;
  table;
  unserv;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private recData:WebService,private service:Service) {

  }
  ngOnInit() {
    const link =this.recData.getVendorTabel();
    this.table=link.subscribe(
      (response)=>
      { 
        this.array=response;
        this.dataSource = new MatTableDataSource(this.array);
    this.dataSource.paginator = this.paginator;
        
      },
      (error)=>
      {
      }

    );

    this.unserv= this.service.data.subscribe(
      (response)=>{
        this.table.unsubscribe();
        this.table=link.subscribe(
          (response)=>
          { 
            this.array=response;
            this.dataSource = new MatTableDataSource(this.array);
        this.dataSource.paginator = this.paginator;
            
          },
          (error)=>
          {
          }
    
        );
      },
      (error)=>
      {console.log(error);
      });
        
  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
   
    }
  noOnDestroy()
  {
    this.table.unsubscribe();;
    this.unserv.unsubscribe();
  }
 
}

