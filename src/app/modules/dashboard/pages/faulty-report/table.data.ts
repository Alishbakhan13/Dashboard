import {TableRow} from './table.model';
import {Subject} from 'rxjs';
export class SeletedRow {
  row:TableRow;
  Obser= new Subject<TableRow>();
  PredObser=new Subject<any>();
  public  ELEMENT_DATA: TableRow[] = [
    {seq: 2222,
    jan: 3,
     feb: 6,
    mar: 7,
    apr: 9,
     may: 10,
    jun: 3,
    jul: 7,
      aug: 2,
     sep: 7,
     nov: 2,
    dec: 7,
  },
  {seq: 2444,
  jan: 3,
   feb: 6,
  mar: 7,
  apr: 9,
   may: 10,
  jun: 3,
   jul: 7,
    aug: 2,
   sep: 7,
   nov: 2,
  dec: 7,
  },
  {seq: 2445,
  jan: 55,
   feb: 7,
  mar: 8,
  apr: 10,
   may: 6,
  jun: 2,
   jul: 9,
    aug: 2,
   sep: 7,
   nov: 2,
  dec: 7,
  }
  ,
  {seq: 5678,
  jan: 55,
   feb: 700,
  mar: 8,
  apr: 10,
   may: 6,
  jun: 2,
   jul: 9,
    aug: 2,
   sep: 7,
   nov: 2,
  dec: 7,
  },
  {seq: 4321,
  jan: 554,
   feb: 73,
  mar: 83,
  apr: 103,
   may: 6,
  jun: 23,
   jul: 93,
    aug: 23,
   sep: 73,
   nov: 23,
  dec: 73,
  },
  {seq: 4448,
  jan: 55,
   feb: 76,
  mar: 81,
  apr: 10,
   may: 62,
  jun: 2,
   jul: 9,
    aug: 2,
   sep: 70,
   nov: 2,
  dec: 7,
  },
  {seq: 3333,
  jan: 53,
   feb: 72,
  mar: 8,
  apr: 10,
   may: 6,
  jun: 2,
   jul: 90,
    aug: 2,
   sep: 7,
   nov: 2,
  dec: 66,
  }

  ];

}
