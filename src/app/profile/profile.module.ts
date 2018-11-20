import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

import {
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatChipsModule
  } from '@angular/material';

@Component({
  selector: 'tcb-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

export const ProfileRoutes: Routes = [
  { path: '', component: AboutComponent },
  // { path: '', component: HomeComponent },
  // { path: 'blog', component: BlogComponent },
  // { path: 'about', component: AboutComponent },
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatGridListModule,
    MatChipsModule,
    MatTooltipModule
  ],
  declarations: [ProfileComponent, HomeComponent, AboutComponent, BlogComponent]
})

export class ProfileModule { }
