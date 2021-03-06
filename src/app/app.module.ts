import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, AfterViewInit, ElementRef, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, Router, RouterModule, PreloadAllModules } from '@angular/router';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CodebaseComponent, CodebaseRoutes, CodebaseModule } from './codebase/codebase.module';
import { ProfileComponent, ProfileRoutes, ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared.module';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',
})

export class AppComponent implements AfterViewInit {
    title = 'app';
    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit() {
        // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#76777f';
    }
}

const routes: Routes = [
    { path: '', component: ProfileComponent, children: ProfileRoutes },
    // { path: '', component: CodebaseComponent, children: CodebaseRoutes },
    // { path: 'profile', component: ProfileComponent, children: ProfileRoutes },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        ToastModule.forRoot(),
        RouterModule.forRoot(routes,
            { preloadingStrategy: PreloadAllModules }),
        CodebaseModule,
        ProfileModule,
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
