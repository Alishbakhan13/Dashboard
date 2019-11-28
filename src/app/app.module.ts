import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BiModule } from './modules/bi/bi.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
const routes: Routes = [

  { path: 'login', component:LoginComponent  },
  { path: '', component:LoginComponent  },
  { path: 'mainpage', component:MainpageComponent  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent
    
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    BiModule,
    RouterModule.forRoot(routes,
    
      {
          // Tell the router to use the hash instead of HTML5 pushstate.
          useHash: true,

          // In order to get anchor / fragment scrolling to work at all, we need to
          // enable it on the router.
          anchorScrolling: "enabled",

          // Once the above is enabled, the fragment link will only work on the
          // first click. This is because, by default, the Router ignores requests
          // to navigate to the SAME URL that is currently rendered. Unfortunately,
          // the fragment scrolling is powered by Navigation Events. As such, we
          // have to tell the Router to re-trigger the Navigation Events even if we
          // are navigating to the same URL.
          onSameUrlNavigation: "reload",

          // Let's enable tracing so that we can see the aforementioned Navigation
          // Events when the fragment is clicked.
          enableTracing: true,
          scrollPositionRestoration: "enabled",
          
      }
  ),
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
