import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-shelflife-t',
  templateUrl: './shelflife-t.component.html',
  styleUrls: ['./shelflife-t.component.css']
})
export class ShelflifeTComponent implements OnInit {

 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

 
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 2, name: 'Vendor2',  weight: 4  ,symbol: 'He'},
  {position: 3, name: 'Vendor3',  weight: 6  ,symbol: 'Li'},
  {position: 1, name: 'Vendor1',  weight: 1  ,symbol: 'H'},
  {position: 4, name: 'Vendor4',  weight: 9  ,symbol: 'Be'},
  {position: 5, name: 'Vendor5',  weight: 10 ,symbol: 'B'},
  {position: 6, name: 'Vendor6',  weight: 12 ,symbol: 'C'},
  {position: 7, name: 'Vendor7',  weight: 14 ,symbol: 'N'},
  {position: 11, name: 'Vendor2', weight: 22 ,symbol: 'Na'},
  {position: 8, name: 'Vendor1',  weight: 15 ,symbol: 'O'},
  {position: 9, name: 'Vendor2',  weight: 18 ,symbol: 'F'},
  {position: 10, name: 'Vendor4', weight: 20 ,symbol: 'Ne'},
  {position: 12, name: 'Vendor1', weight: 24 ,symbol: 'Mg'},
  {position: 13, name: 'Vendor3', weight: 26 ,symbol: 'Al'},
  {position: 14, name: 'Vendor5', weight: 28 ,symbol: 'Si'},
  {position: 15, name: 'Vendor5', weight: 30 ,symbol: 'P'},
  {position: 16, name: 'Vendor5', weight: 32 ,symbol: 'S'},
  {position: 17, name: 'Vendor7', weight: 35 ,symbol: 'Cl'},
  {position: 18, name: 'Vendor7', weight: 39 ,symbol: 'Ar'},
  {position: 19, name: 'Vendor1', weight: 39 ,symbol: 'K'},
  {position: 20, name: 'Vendor2', weight: 40 ,symbol: 'Ca'},
  ];
