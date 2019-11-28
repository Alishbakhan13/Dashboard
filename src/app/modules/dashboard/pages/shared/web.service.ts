import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/Operators';
import { Observable, Subject } from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class  WebService
{


  legend = new Subject<boolean>();

  constructor(private http: HttpClient) { 

  }
 //getting  data for table  vendors
 getVendorTabel()
 { const link=this.http.get("http://localhost:8000/dashboard/vendorsTable/", {headers: 
 {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
 
  return link ;

 }

 getDeficientTabel()
 { const link=this.http.get("http://localhost:8000/dashboard/DefTable/", {headers: 
 {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
 
  return link ;

 }

 getSignal()
 {
   const link=this.http.get("http://127.0.0.1:8000/dashboard/1/", {headers: 
   {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
   
    return link ;

 }

 getDeficientComp()
 {
  const link=this.http.get("http://127.0.0.1:8000/dashboard/DefComp/", {headers: 
  {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
  
   return link ;


 }

 getWorkeEff()
 {
  const link=this.http.get("http://127.0.0.1:8000/dashboard/wokerEff/", {headers: 
  {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
  
   return link ;
 }

 
 getFaultyTable()
 {
  const link=this.http.get("http://127.0.0.1:8000/dashboard/faultytable/", {headers: 
  {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
  
   return link ;
 }
 
 getReportFaultyCompntship()
 {
  const link=this.http.get("http://127.0.0.1:8000/dashboard/ReportFaultyCmpt/", {headers: 
  {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
  
   return link ;
 }

 getDeficiencyReport()
 {
  const link=this.http.get("http://127.0.0.1:8000/dashboard/DeficiencyReport/", {headers: 
  {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
  
   return link ;
 }
 sendfaultyrow(data:any)
  {
    const link=this.http.put("http://127.0.0.1:8000/dashboard/faultydata/",data);
    
     return link ;
 
  }

 getData()
 {
   const link=this.http.get("https://http-2d72f.firebaseio.com/data.json", {headers: 
   {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
   
    return link ;

 }
 Recvtable()
 {
   const link=this.http.get("https://fyp-test-c518d.firebaseio.com/data.json", {headers: 
   {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
   
    return link ;

 }
 SendData(send)
 {
  return this.http.put("http://127.0.0.1:8000/dashboard/faultyrange/"
  ,send ,{headers: 
    {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }}) ;
  
  
 }
 
  SendFrmTable(server)
  {
    
      //ppost request
     //return this.http.post("https://http-2d72f.firebaseio.com/data.json"
     //,server
     //,{head:this.head}) ;
     //put request
     
     const header = new Headers({'Content-Type':'application/json'});
   //ppost request
  //return this.http.post("https://http-2d72f.firebaseio.com/data.json"
  //,server
  //,{head:this.head}) ;
  //put request
  return this.http.put("http://127.0.0.1:8000/dashboard/faultydata/"
  ,server ,{headers: 
    {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }}) ;
  }

  RecvRange()
  {
    
      //ppost request
     //return this.http.post("https://http-2d72f.firebaseio.com/data.json"
     //,server
     //,{head:this.head}) ;
     //put request
     const link=this.http.get("https://range-8bbc2.firebaseio.com/data.json", {headers: 
   {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
   
    return link ;
  }
   RecReg()
   {
     const link=this.http.get("https://linear-519d7.firebaseio.com/data.json", {headers: 
     {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
     
      return link ;
     
   }
  

    /*array =[
    [1,1004,"2018-12-19","Unserviceable",58,"NotExpired","NotExpired"],
    [2,1001,"2018-08-19","Serviceable",19,"NotExpired","NotExpired"],
    [3,1009,"2018-11-19","Expired",28,"NotExpired","NotExpired"],
    [4,1004,"2018-03-19","Unserviceable",3,"NotExpired","Expired"],
    [5,1003,"2018-08-19","Unserviceable",40,"NotExpired","NotExpired"],
    [6,1004,"2018-01-19","Serviceable",81,"Expired","Expired"],
    [7,1008,"2018-10-19","Expired",38,"NotExpired","Expired"],
    [8,1004,"2018-04-19","FirstExtension",63,"NotExpired","Expired"],
    [9,1003,"2018-11-19","Serviceable",41,"Expired","Expired"],
    [10,1005,"2018-10-19","FirstExtension",75,"Expired","Expired"],
    [11,1005,"2018-05-19","SecondExtension",14,"Expired","Expired"],
    [12,1008,"2018-09-19","Unserviceable",22,"NotExpired","Expired"],
    [13,1006,"2018-11-19","Serviceable",87,"Expired","Expired"],
    [14,1006,"2018-01-19","Expired",88,"NotExpired","Expired"],
    [15,1001,"2018-08-19","Expired",26,"Expired","Expired"],
    [16,1002,"2018-11-19","Expired",25,"NotExpired","Expired"],
    [17,1008,"2018-05-19","Serviceable",67,"NotExpired","Expired"],
    [18,1006,"2018-09-19","FirstExtension",70,"NotExpired","Expired"],
    [19,1006,"2018-10-19","Unserviceable",65,"Expired","NotExpired"],
    [20,1010,"2018-05-19","SecondExtension",45,"Expired","Expired"] ];



  Sendnow(server:any[])
  {  const header = new Headers({'Content-Type':'application/json'});
    //ppost request
   //return this.http.post("https://http-2d72f.firebaseio.com/data.json"
   //,server
   //,{head:this.head}) ;
   //put request
   return this.http.put("https://fyp-test-c518d.firebaseio.com/data.json"
   ,server
   ,{headers:header}) ;
} */



}
