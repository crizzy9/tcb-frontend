import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@Component({
    selector: 'tcb-root',
    template: '<router-outlet></router-outlet>'
})
export class CodebaseComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }

}

export const CodebaseRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        CodebaseComponent,
        HomeComponent,
        AboutComponent
    ]
})
export class CodebaseModule { }
