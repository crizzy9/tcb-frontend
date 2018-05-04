import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PlaygroundService } from './playground.service';


@Component({
    selector: 'tcb-codebase',
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
    { path: 'about', component: AboutComponent},
    { path: 'playground', component: PlaygroundComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        CodebaseComponent,
        HomeComponent,
        AboutComponent,
        PlaygroundComponent
    ],
    providers: [
        PlaygroundService
    ]
})
export class CodebaseModule { }
