import { Component, OnInit } from '@angular/core';
import { socialIcons, sections, tiles, words } from './about.model';
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

    constructor() {
        this.icons = Object.keys(this.socialIcons);
    }

    ngOnInit() {
        d3.wordcloud()
        .size([555, 320])
        .selector('#highlights-cloud')
        .words(this.words)
        .start();
    }

}
