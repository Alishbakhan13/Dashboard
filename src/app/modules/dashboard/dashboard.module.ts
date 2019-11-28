import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { DefReportComponent } from './pages/def-report/def-report.component';
import { WorkerEffComponent } from './pages/worker-eff/worker-eff.component';
import { FaultyReportComponent } from './pages/faulty-report/faulty-report.component';
import {CompshipComponent} from './pages/ex-report/compship/compship.component';
import {HaltedactComponent} from './pages/ex-report/haltedact/haltedact.component';
import {ShelflifeComponent} from './pages/ex-report/shelflife/shelflife.component';
import {TableshipComponent} from './pages/ex-report/tableship/tableship.component';
import {ShipmentComponent } from './pages/ex-report/shipment/shipment.component';
import {ExReportComponent} from './pages/ex-report/ex-report.component';
import {VendorpershipComponent } from './pages/ex-report/vendorpership/vendorpership.component';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DxChartModule } from 'devextreme-angular';
import {PopupComponent} from "./pages/faulty-report/popup/popup.component";
import { DxRangeSelectorModule, DxTooltipModule } from 'devextreme-angular';
import { MatDialogModule} from  '@angular/material' ;
import {SeletedRow} from './pages/faulty-report/table.data';
import {WebService} from './pages/shared/web.service';
import {Service} from './pages/shared/service';
import {
  MatFormFieldModule,
} from '@angular/material';
  import {FormsModule, ReactiveFormsModule} from '@angular/forms';
  import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  } from '@angular/material';
  import {CdkTableModule} from '@angular/cdk/table';
import { DeficiencyListComponent } from './pages/deficiency_list/deficiency-list.component';
import { StockLevelComponent } from './pages/deficiency_list/stock-level/stock-level.component';
import { UnaailabelItemsComponent } from './pages/deficiency_list/unaailabel-items/unaailabel-items.component';
import { UnserviceableComponent } from './pages/deficiency_list/unserviceable/unserviceable.component';
import { PreInstallationComponent } from './pages/deficiency_list/pre-installation/pre-installation.component';
import { CriticalDefComponent } from './pages/deficiency_list/critical-def/critical-def.component';
import { DemandIssuanceComponent } from './pages/deficiency_list/demand-issuance/demand-issuance.component';
import { TestingComponent } from './pages/deficiency_list/testing/testing.component';
import { DefTableComponent } from './pages/deficiency_list/def-table/def-table.component';
import { CurveFittingComponent } from './pages/curve-fitting/curve-fitting.component';
import {ComponentPlacementComponent} from './pages/component-placement/component-placement.component';


  
  

const providers = [SeletedRow,WebService,Service];

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    VendorsComponent,
    DefReportComponent,
    WorkerEffComponent,
    FaultyReportComponent,
    PopupComponent,
    CompshipComponent,
    HaltedactComponent,  
     ShelflifeComponent,
     TableshipComponent,
      ShipmentComponent ,
     ExReportComponent,
     VendorpershipComponent,
     DeficiencyListComponent,
     StockLevelComponent,
     UnaailabelItemsComponent,
     UnserviceableComponent,
     PreInstallationComponent,
     CriticalDefComponent,
     DemandIssuanceComponent,
     TestingComponent,
     DefTableComponent,
     CurveFittingComponent,
     ComponentPlacementComponent
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    DxChartModule,
    DxRangeSelectorModule,
     DxTooltipModule ,
     DxRangeSelectorModule,
     DxTooltipModule ,
     HttpClientModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
     CdkTableModule,
     MatAutocompleteModule,
     MatButtonModule,
     MatButtonToggleModule,
     MatCardModule,
     MatCheckboxModule,
     MatChipsModule,
     MatStepperModule,
     MatDatepickerModule,
     MatDialogModule,
     MatExpansionModule,
     MatGridListModule,
     MatIconModule,
     MatInputModule,
     MatListModule,
     MatMenuModule,
     MatNativeDateModule,
     MatPaginatorModule,
     MatProgressBarModule,
     MatProgressSpinnerModule,
     MatRadioModule,
     MatRippleModule,
     MatSelectModule,
     MatSidenavModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatSnackBarModule,
     MatSortModule,
     MatTableModule,
     MatTabsModule,
     MatToolbarModule,
     MatTooltipModule,
  ],
  providers: [SeletedRow,WebService,Service],
  bootstrap: [DashboardComponent],
  entryComponents: [PopupComponent,FaultyReportComponent]
})
export class DashboardModule { }
