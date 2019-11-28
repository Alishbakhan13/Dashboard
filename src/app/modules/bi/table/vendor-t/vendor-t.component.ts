import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-vendor-t',
  templateUrl: './vendor-t.component.html',
  styleUrls: ['./vendor-t.component.css']
})
export class VendorTComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
   
    }

 
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 2, name: 'Vendor2',  weight: "item 1" ,symbol: 'broken'},
  {position: 3, name: 'Vendor3',  weight: "item 2"  ,symbol: 'faulted'},
  {position: 1, name: 'Vendor1',  weight: "item 3" ,symbol: 'damaged'},
  {position: 4, name: 'Vendor4',  weight: "item 4" ,symbol: 'damged'},
  {position: 5, name: 'Vendor5',  weight:"item 5" ,symbol: 'faulted'},
  {position: 6, name: 'Vendor6',  weight: "item 6" ,symbol: 'dameged'},
  {position: 7, name: 'Vendor7',  weight: "item 7",symbol: 'broken'}
  ];
