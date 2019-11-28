import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BiComponent } from './bi.component';
import { TableComponent } from './table/table.component';
import { ChartsComponent } from './charts/charts.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {Routes,RouterModule} from '@angular/router';
import { VendorCComponent } from './charts/vendor-c/vendor-c.component';
import { ShelflifeCComponent } from './charts/shelflife-c/shelflife-c.component';
import { ReorderCComponent } from './charts/reorder-c/reorder-c.component';
import { ActivityCComponent } from './charts/activity-c/activity-c.component';
import { FaultyCComponent } from './charts/faulty-c/faulty-c.component';
import { RevenueCComponent } from './charts/revenue-c/revenue-c.component';
import { ActivityTComponent } from './table/activity-t/activity-t.component';
import { ShelflifeTComponent } from './table/shelflife-t/shelflife-t.component';
import { ReoederTComponent } from './table/reoeder-t/reoeder-t.component';
import { VendorTComponent } from './table/vendor-t/vendor-t.component';
import { FaultsTComponent } from './table/faults-t/faults-t.component';
import { RevenueTComponent } from './table/revenue-t/revenue-t.component';
import {Service} from "./shared/shelf.service";
import { sharedStylesheetJitUrl } from '@angular/compiler';
import {MatRadioModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
const  approute :Routes =[
  {path:'tables',component:BiComponent},
  {path:'powerbi',component:BiComponent},

];
@NgModule({
  declarations: [
    BiComponent,
    TableComponent,
    ChartsComponent,
    VendorCComponent,
    ShelflifeCComponent,
    ReorderCComponent,
    ActivityCComponent,
    FaultyCComponent,
    RevenueCComponent,
    ActivityTComponent,
    ShelflifeTComponent,
    ReoederTComponent,
    VendorTComponent,
    FaultsTComponent,
    RevenueTComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule,
    MatSliderModule,
    //RouterModule.forRoot(approute)
    RouterModule.forRoot(approute,
    
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
  )
],

  providers: [Service],
  bootstrap: [BiComponent]
})

export class BiModule { }
