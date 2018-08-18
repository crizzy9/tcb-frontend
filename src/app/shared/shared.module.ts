import { RouterModule } from '@angular/router';
import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatDividerModule
} from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

// @Component({
//   selector: 'tcb-shared',
//   template: '<router-outlet></router-outlet>'
// })
// export class SharedComponent implements OnInit {
//   constructor() {}
//   ngOnInit() {}
// }

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  exports: [
    // allows to use tcb-header in profile module
    HeaderComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
