import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable()
export class Service {
  subject = new Subject<number>();
  see = new Subject<number>();
  lenged = new Subject<String>();
  label = new Subject<boolean>();
  value = new Subject<boolean>();
  constructor(private http: HttpClient) { 

  }

  getData()
  {
    const link=this.http.get("http://127.0.0.1:8000/practice/vendors/", {headers: 
    {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
    
     return link ;
 
  }


  getSignal()
  {
    const link=this.http.get("http://127.0.0.1:8000/practice/1/", {headers: 
    {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
    
     return link ;
 
  }
}