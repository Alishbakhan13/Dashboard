import {Component, OnInit , ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource,MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {SeletedRow} from './table.data';
import {PopupComponent} from './popup/popup.component';
import {WebService} from '../shared/web.service';
@Component({
  selector: 'app-faulty-report',
  templateUrl: './faulty-report.component.html',
  styleUrls: ['./faulty-report.component.css']
})
export class FaultyReportComponent implements OnInit {
  data:any;
    displayedColumns: string[] = ["ID","LotNumber","Date","status","PartID","AlertPreservationLife","AlertStorageLife"];
    dataSource ;
     ice:any;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(public dialog: MatDialog,private selRow :SeletedRow ,private recData:WebService)
    {




    }

    applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit()
    {   const g =this.recData.Recvtable();
       
     g.subscribe(

     (response)=>{
       console.log(response);
         this.ice=response;
         this.dataSource = new MatTableDataSource(this.ice);
             this.dataSource.paginator = this.paginator;

     },

     (error)=>{
      this.dataSource=[[1,1004,"2018-12-19","Unserviceable",58,"NotExpired","NotExpired"],[2,1001,"2018-08-19","Serviceable",19,"NotExpired","NotExpired"],[3,1009,"2018-11-19","Expired",28,"NotExpired","NotExpired"],[4,1004,"2018-03-19","Unserviceable",3,"NotExpired","Expired"],[5,1003,"2018-08-19","Unserviceable",40,"NotExpired","NotExpired"],[6,1004,"2018-01-19","Serviceable",81,"Expired","Expired"],[7,1008,"2018-10-19","Expired",38,"NotExpired","Expired"],[8,1004,"2018-04-19","FirstExtension",63,"NotExpired","Expired"],[9,1003,"2018-11-19","Serviceable",41,"Expired","Expired"],[10,1005,"2018-10-19","FirstExtension",75,"Expired","Expired"],[11,1005,"2018-05-19","SecondExtension",14,"Expired","Expired"],[12,1008,"2018-09-19","Unserviceable",22,"NotExpired","Expired"],[13,1006,"2018-11-19","Serviceable",87,"Expired","Expired"],[14,1006,"2018-01-19","Expired",88,"NotExpired","Expired"],[15,1001,"2018-08-19","Expired",26,"Expired","Expired"],[16,1002,"2018-11-19","Expired",25,"NotExpired","Expired"],[17,1008,"2018-05-19","Serviceable",67,"NotExpired","Expired"],
      [18,1006,"2018-09-19","FirstExtension",70,"NotExpired","Expired"],
      [19,1006,"2018-10-19","Unserviceable",65,"Expired","NotExpired"]
      ,[20,1010,"2018-05-19","SecondExtension",45,"Expired","Expired"]];
       console.log(error);

     }

   );


    }
   onRowClicked(row)
   {
     this.selRow.Obser.next(row);
     console.log('Row clicked: ', row[0]);
     const x={"X":row[0]};
     this.selRow.row=row;
     const g=this.recData.SendFrmTable(x);
      g.subscribe(

      (response)=>{
        console.log(response);
        this.data=response;
        this.openDialog();
        //const r =this.recData.RecvRange();

      //  r.subscribe(

      //  (response)=>{
          console.log(response);
          //this.data=response;
          //this.openDialog();
      //  },
      //    (error)=>{
            //console.log(error);
//}
       // );


      },

      (error)=>{
        console.log(error);

      }

    );

  // this.data=row;
    // this.selRow.row=row;
     //this.openDialog();
  }
  gg(dec)
  {
    console.log(dec);
  }
  openDialog()
   {
   this.dialog.open(PopupComponent, {
     height: '35em',
      width:'100em',
     data: this.data
   });
   }

 
}

