import { Component, OnInit ,Inject,ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
import {TableRow} from '../table.model';
import { DxChartComponent } from "devextreme-angular";
import notify from 'devextreme/ui/notify';
import {SeletedRow} from '../table.data';
import {WebService} from '../../shared/web.service';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @ViewChild(DxChartComponent) dataGrid: DxChartComponent;
  dataSourceRange:any[];
  dataSourceResult:any[];
  Seq;
  ROW:TableRow;
  old;
  //RangVal:number[];
  RangeMon:any[]=["2019-1-1","2019-12-1"];


 // startSelectedValue: Date= new Date(2019,1,1);
 // endSelectedValue:Date=new Date(2019,12,1);

 constructor(@Inject(MAT_DIALOG_DATA) public data: any[],private selected:SeletedRow,private selV:WebService)
 {
     //this.ROW=data;

   this.Seq=this.selected.row[0];
   this.dataSourceRange = this.data;


   ;
   this.dataSourceResult =this.dataSourceRange.slice();

     this.old=this.dataSourceResult.slice();
     console.log(this.old);

 /* this.dataSourceRange = [
  { x: "Jan", y: this.ROW.jan },
  { x: " Feb", y: this.ROW.feb},
  { x: "Mar", y: this.ROW.mar},
  { x:  "Apr ", y: this.ROW.apr },
  { x:  "May", y: this.ROW.may },
  { x: "Jun ", y: this.ROW.jun },
  { x: " Jul ", y: this.ROW.jul },
  { x: " Aug ", y: this.ROW.aug },
  { x: "Sep ", y: this.ROW.sep},
  { x: " Oct ", y: 15 },
  { x: " Nov ", y: this.ROW.nov},
  { x: " Dec ", y: this.ROW.dec }];

  this.dataSourceResult = [
  { x: "Jan", y: this.ROW.jan   },
  { x: " Feb", y: this.ROW.feb },
  { x: "Mar", y: this.ROW.mar},
  { x:  "Apr ", y: this.ROW.apr },
  { x:  "May", y: this.ROW.may },
  { x: "Jun ", y: this.ROW.jun },
  { x: " Jul ", y: this.ROW.jul },
  { x: " Aug ", y: this.ROW.aug },
  { x: "Sep ", y: this.ROW.sep},
  { x: " Oct ", y: 15 },
  { x: " Nov ", y: this.ROW.nov},
  { x: " Dec ", y: this.ROW.dec }];
  */


 //  this.shutter= {
    //color: 'powderblue',
  //opacity: 0.9
  //};
 }


 sendSelected(){
   let send=[
    this.RangeMon
    //this.RangeMon,
   // this.PredVal,
   // this.PredMon

  ];


   const g =this.selV.SendData(send);

    
g.subscribe(

(response)=>{
  console.log(response);
  // linear regression  prediction from django server
  this.RecvData(response);

},

(error)=>{
  console.log(error);

}

);




 }
 RecvData(res)
 {  let H=[];
    let p=false;
    console.log("old one" +this.old);
   H= this.old.slice();
   console.log(this.old);
   let counter=0;
   let j=[];
   res.forEach((item,index)=>
    {
     j.push({x:item.x,f:item.y});

    });
    console.log(j);
   /*H.forEach((item,index) =>
   { if (item.x.getMonth()==this.RangeMon[0].getMonth())
     {p=true;
      }
     if(p==true)
     {
     let g={x:new Date(2019,index,1),f:counter};
     H.push(g);
     counter++;
    }
   if (item.x.getMonth()==this.RangeMon[1].getMonth())
    {

     let g={x:new Date(2019,index,1),f:counter};
     H.push(g);
    //console.log(item);
    p=false;

  }
}

);*/
 //   let g={x:new Date(2018,11,30),f:0};
   // H.push(g);
   // let r={x:new Date(2018,11,30),y:0};
   // H.push(r);
   H=H.concat(j);
   this.dataSourceResult=H;
     this.dataGrid.instance.refresh()
   console.log(this.dataSourceResult);

 }
ngOnInit()
{
 /* this.selected.Obser.subscribe(
    (rowValue:TableRow)=>
    {
      this.ROW=rowValue;
      this.Seq=this.ROW.seq;
      console.log();

        this.dataSourceRange =[
       { x: "Jan", y: rowValue.jan },
       { x: " Feb", y: rowValue.feb},
       { x: "Mar", y: rowValue.mar},
       { x:  "Apr ", y: rowValue.apr},
       { x:  "May", y: rowValue.may },
       { x: "Jun ", y: rowValue.jun },
       { x: " Jul ", y: rowValue.jul },
       { x: " Aug ", y: rowValue.aug },
       { x: "Sep ", y: rowValue.sep},
       { x: " Oct ", y: 15 },
       { x: " Nov ", y: rowValue.nov},
       { x: " Dec ", y: rowValue.dec }]

       this.dataSourceResult=this.dataSourceRange;
      this.dataGrid.instance.refresh();



    }
  ); */

   //this.data=response;
     //  this.selRow.row=row;
       //this.openDialog();


}
customizeTooltip(arg: any) {
  console.log("hello");
    return "dfsdfsdfsd";
}
onValueChanged(e) {
      //let j=[1,2,3];
      //j.splice(0,3);
      //let jj=["ggg","ggg"];
      //jj.splice(0,2);
      //this.RangeMon=jj;

      //let xx=0;
   //  console.log(e.value[0]);
     //  console.log(e.value[1]);
     this.RangeMon=[e.value[0],e.value[1]];
   /* let data = this.dataSourceRange,
        total = 0,
        startIndex,
        endIndex;

    data.forEach((item, index) => {

        if (item.x == e.value[0]) {
           this.RangeMon.push(item.x);
            startIndex = index;


        }


        else if (item.x == e.value[1]) {
           this.RangeMon.push(item.x);
            endIndex = index;
        }
    });

    if(endIndex) {
        data
            .slice(startIndex, endIndex + 1)
            .forEach(function(item){

                total += item.y;
               // this.RangVal.push(item.y);
               j.push(item.y);
            });
    }
    else {
        total = data[startIndex].y;
    }

      */
    //this.RangVal=j;
    ///console.log(this.RangVal);
    console.log(this.RangeMon);
}

/* onchng(e)
{
  let j=[1,2,3];
  j.splice(0,3);
  let jj=["ggg","ggg"];
  jj.splice(0,2);
  this.PredMon=jj;
  let data = this.dataSource,
      total = 0,
      startIndex,
      endIndex;

  data.forEach((item, index) => {

      if (item.x == e.value[0]) {
         this.PredMon.push(item.x);
          startIndex = index;


      }


      else if (item.x == e.value[1]) {
         this.PredMon.push(item.x);
          endIndex = index;
      }
  });

  if(endIndex) {
      data
          .slice(startIndex, endIndex + 1)
          .forEach(function(item){

              total += item.y;
             // this.RangVal.push(item.y);
             j.push(item.y);
          });
  }
  else {
      total = data[startIndex].y;
  }

  this.totalResult = total;
  this.PredVal=j;
  console.log(this.PredVal);
  console.log(this.PredMon);

} */



}
