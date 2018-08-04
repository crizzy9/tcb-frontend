import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';


@Component({
  selector: 'tcb-profile',
  template: '<router-outlet></router-outlet>'
})
export class ProfileComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

export const ProfileRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [ProfileComponent, HomeComponent, AboutComponent, BlogComponent]
})

export class ProfileModule { }
