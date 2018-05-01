import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, Router, RouterModule, PreloadAllModules } from '@angular/router';
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
        RouterModule.forRoot(routes,
            { preloadingStrategy: PreloadAllModules }),
        CodebaseModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
