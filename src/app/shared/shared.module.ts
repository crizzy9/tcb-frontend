import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule} from '@angular/material';

import { HeaderComponent } from './header/header.component';

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
    MatButtonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    // allows to use tcb-header in profile module
    HeaderComponent
  ]
})
export class SharedModule { }
