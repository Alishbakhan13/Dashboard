import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/Vendors', title: 'Vendors',  icon: "assets/img/shop-cart.png", class: '' },
    { path: '/DeficiencyReport', title: 'Deficienct Componenets',  icon:'assets/img/warning.png', class: '' },
    { path: '/WorkerEfficiency', title: 'Worker Performance', icon:'assets/img/boss.png', class: '' },
    { path: '/FaultyReport', title: 'Faulty Prediction',  icon:'assets/img/assessment.png', class: '' },
    { path: '/ExpiryReport', title: 'Deficiencey Report',  icon:'assets/img/assesment (1).png', class: '' },
    { path: '/Deficiencylist', title: 'Inventory Report',  icon:'assets/img/inventory.png', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
