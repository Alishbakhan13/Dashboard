import { Component, OnInit ,NgZone} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private zone:NgZone) { }
  username: string;
  password: string;
    ngOnInit() {
    }
    login() : void {
      if(this.username === 'admin' && this.password === 'admin'){
       // console.log("fddfg");
      //  this.router.navigateByUrl('/mainpage');
        this.zone.run(() => {
          this.router.navigateByUrl('/powerbi')
        });
       
      }else {
        alert("Invalid credentials");
      }
    }
    }
  