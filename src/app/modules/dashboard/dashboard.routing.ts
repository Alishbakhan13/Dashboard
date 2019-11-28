import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { DefReportComponent } from './pages/def-report/def-report.component';
import { WorkerEffComponent } from './pages/worker-eff/worker-eff.component';
import { FaultyReportComponent } from './pages/faulty-report/faulty-report.component';
import { DashboardComponent} from './dashboard.component';
import {ExReportComponent} from './pages/ex-report/ex-report.component';
import{DeficiencyListComponent} from './pages/deficiency_list/deficiency-list.component';
import {BiComponent} from '../bi/bi.component';
import { CurveFittingComponent} from './pages/curve-fitting/curve-fitting.component';
const  routes:Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: 'powerbi',      component:  BiComponent },
  { path: 'app2',      component:  DashboardComponent },
  { path: 'Vendors',      component: VendorsComponent },
  { path: 'DeficiencyReport',   component: DefReportComponent },
  { path: 'WorkerEfficiency',     component: WorkerEffComponent },
  { path: 'FaultyReport',     component: FaultyReportComponent },
   {path: 'ExpiryReport',     component:ExReportComponent},
   {path:'Deficiencylist', component:DeficiencyListComponent},
   {path:'CurveFitting', component:CurveFittingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
