import { Component, OnInit } from '@angular/core';
import { 
    northeasternCourses,
    mumbaiUnivCourses,
    sections,
    projects,
    technicalSkills,
    words
} from './about.model';
import * as D3 from 'd3';

declare let d3: any;


@Component({
  selector: 'tcb-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
    sections = sections;
    projects = projects;
    words = words;
    northeasternCourses = northeasternCourses;
    mumbaiUnivCourses = mumbaiUnivCourses;
    technicalSkills = technicalSkills;
    tileColumns;

    constructor() {
    }

    ngOnInit() {
        // d3.wordcloud()
        // .size([555, 320])
        // .selector('#highlights-cloud')
        // .words(this.words)
        // .start();
        this.setDeviceBasedConfig(window);
    }

    // Ref: https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive?rq=1
    onResize(event) {
        this.setDeviceBasedConfig(event.target);
    }

    setDeviceBasedConfig(target) {
        // To set number of columns in project grid view for responsive view.
        if (target.innerWidth <= 400) {
            this.tileColumns = 1;
        } else if (target.innerWidth <= 800 && target.innerHeight > target.innerWidth) { // if ipad screen in potrait
            this.tileColumns = 2;
        } else {
            this.tileColumns = 3;
        }
    }
}
