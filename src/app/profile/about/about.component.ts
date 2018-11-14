import { Component, OnInit } from '@angular/core';
import { northeasternCourses, mumbaiUnivCourses, socialIcons, sections, tiles, words, deviceBasedVals } from './about.model';
import * as D3 from 'd3';

declare let d3: any;


@Component({
  selector: 'tcb-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
    icons: string[];
    socialIcons = socialIcons;
    sections = sections;
    tiles = tiles;
    words = words;
    northeasternCourses = northeasternCourses;
    mumbaiUnivCourses = mumbaiUnivCourses;
    deviceBasedVals = deviceBasedVals;

    constructor() {
        this.icons = Object.keys(this.socialIcons);
    }

    ngOnInit() {
        // d3.wordcloud()
        // .size([555, 320])
        // .selector('#highlights-cloud')
        // .words(this.words)
        // .start();
        this.deviceBasedVals.cols = (window.innerWidth <= 400) ? 1:3;
        console.log('colssss', this.deviceBasedVals);
    }

    // Ref: https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive?rq=1
    onResize(event) {
        // Resize doesnt work when actually just resizing chrome window.
        // Works when window is small and page is reloaded
        this.deviceBasedVals.cols = (event.target.innerWidth <= 400) ? 1:3;
        console.log('Resize', this.deviceBasedVals);
    }

}
