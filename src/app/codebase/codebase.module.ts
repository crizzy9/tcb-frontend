import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PlaygroundService } from './playground.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authenticationn.service';

@Component({
    selector: 'tcb-codebase',
    template: '<router-outlet></router-outlet>'
})
export class CodebaseComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}

export const CodebaseRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'playground', component: PlaygroundComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent}
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
        PlaygroundComponent,
        LoginComponent,
        RegisterComponent,
    ],
    providers: [
        PlaygroundService,
        AuthenticationService,
    ]
})
export class CodebaseModule { }
