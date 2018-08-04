import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, Router, RouterModule, PreloadAllModules } from '@angular/router';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CodebaseComponent, CodebaseRoutes, CodebaseModule } from './codebase/codebase.module';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})

export class AppComponent {
    title = 'app';
}

const routes: Routes = [
    { path: '', component: CodebaseComponent, children: CodebaseRoutes }
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
        CodebaseModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
