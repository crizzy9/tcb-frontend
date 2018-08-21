import { Component, OnInit } from '@angular/core';
import * as D3 from 'd3';

declare let d3: any;


@Component({
  selector: 'tcb-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    icons: string[];
    socialIcons: Object = {
        github: {
            url: 'https://github.com/crizzy9',
            icon: 'assets/icons/github.png',
        },
        linkedin: {
            url: 'https://www.linkedin.com/in/shyam-padia/',
            icon: 'assets/icons/linkedin.png',
        },
        medium: {
            url: 'https://medium.com/@exMachina9',
            icon: 'assets/icons/medium.png',
        },
        // kaggle: {
        //     url: 'https://www.kaggle.com/gottron',
        //     icon: 'assets/icons/kaggle.png',
        // },
        gmail: {
            url: 'padia.s@husky.neu.edu',
            icon: 'assets/icons/gmail.png',
        },
        stackoverflow: {
            url: 'https://stackoverflow.com/users/4419522/shyam-padia',
            icon: 'assets/icons/stackoverflow.png',
        },
        facebook: {
            url: 'https://www.facebook.com/supershyam',
            icon: 'assets/icons/facebook.png',
        },
        instagram: {
            url: 'https://www.instagram.com/thegeektherapy/',
            icon: 'assets/icons/instagram.png',
        },
        twitter: {
            url: 'https://twitter.com/thegeektherapy',
            icon: 'assets/icons/twitter.png',
        },
        // youtube: {
        //     url: 'https://www.youtube.com/user/shyampadia',
        //     icon: 'assets/icons/youtube.png',
        // },
        spotify: {
            url: 'https://open.spotify.com/user/exmachina9',
            icon: 'assets/icons/spotify.png',
        },
        // reddit: {
        //     url: 'https://www.reddit.com/user/crizzy_mcawesome',
        //     icon: 'assets/icons/reddit.png',
        // }
    };

    sections: Array<any> = [
        {
            id: 'intro',
            name: 'Init()'
        },
        {
            id: 'education',
            name: 'Education && Highlights'
        },
        {
            id: 'experience',
            name: 'Experience'
        },
        {
            id: 'skills',
            name: 'Skills'
        },
        {
            id: 'projects',
            name: 'Projects'
        },
        {
            id: 'achievements',
            name: 'Achievements'
        },
    ];

    tiles = [
        {text: 'Fan Curation - CodeChella', cols: 1, rows: 1, color: 'lightblue'},
        {text: 'Text Reconstruction', cols: 1, rows: 1, color: '#DDBDF1'},
        {text: 'Starcraft II Bot', cols: 1, rows: 1, color: 'lightgreen'},
        {text: 'Deep Car', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Crawler - Search Engine', cols: 1, rows: 1, color: 'yellow'},
        {text: 'Open AI Gym', cols: 1, rows: 1, color: 'orange'},
      ];

    words = [
        {text: 'have', size: 102},
        {text: 'Oliver', size: 47},
        {text: 'say', size: 46},
        {text: 'said', size: 36},
        {text: 'bumble', size: 29, href: 'https://en.wikipedia.org/wiki/Beadle'},
        {text: 'will', size: 29},
        {text: 'Mrs', size: 56, href: 'https://en.wikipedia.org/wiki/Mrs.'},
        {text: 'Mann', size: 27, href: 'http://educationcing.blogspot.nl/2012/06/oliver-twist-mrs-manns-character.html'},
        {text: 'Mr', size: 27},
        {text: 'very', size: 26},
        {text: 'child', size: 20},
        {text: 'all', size: 19},
        {text: 'boy', size: 19},
        {text: 'gentleman', size: 19, href: 'http://www.thefreelibrary.com/The+gentleman+in+the+white+waistcoat%3a+Dickens+and+metonymy.-a0154239625'},
        {text: 'great', size: 19},
        {text: 'take', size: 19},
        {text: 'but', size: 18},
        {text: 'beadle', size: 16},
        {text: 'twist', size: 16},
        {text: 'board', size: 15},
        {text: 'more', size: 15},
        {text: 'one', size: 15},
        {text: 'workhouse', size: 15},
        {text: 'parish', size: 14},
        {text: 'there', size: 14},
        {text: 'come', size: 13},
        {text: 'hand', size: 13},
        {text: 'know', size: 13},
        {text: 'sir', size: 13},
        {text: 'being', size: 12},
        {text: 'head', size: 12},
        {text: 'make', size: 12},
        {text: 'out', size: 12},
        {text: 'can', size: 11},
        {text: 'little', size: 11},
        {text: 'reply', size: 11},
        {text: 'any', size: 10},
        {text: 'cry', size: 10},
        {text: 'good', size: 10},
        {text: 'name', size: 10},
        {text: 'poor', size: 10},
        {text: 'time', size: 10},
        {text: 'two', size: 10},
        {text: 'after', size: 9},
        {text: 'dear', size: 9},
        {text: 'get', size: 9},
        {text: 'gruel', size: 9},
        {text: 'long', size: 9},
        {text: 'may', size: 9},
        {text: 'never', size: 9},
        {text: 'some', size: 9},
        {text: 'well', size: 9},
        {text: 'white', size: 9},
        {text: 'woman', size: 9},
        {text: 'chair', size: 8},
        {text: 'day', size: 8},
        {text: 'give', size: 8},
        {text: 'inquire', size: 8},
        {text: 'made', size: 8},
        {text: 'next', size: 8},
        {text: 'now', size: 8},
        {text: 'other', size: 8},
        {text: 'over', size: 8},
        {text: 'small', size: 8},
        {text: 'surgeon', size: 8},
        {text: 'think', size: 8},
        {text: 'too', size: 8},
        {text: 'walk', size: 8},
        {text: 'want', size: 8},
        {text: 'bless', size: 7},
        {text: 'eye', size: 7},
        {text: 'man', size: 7},
        {text: 'master', size: 7},
        {text: 'most', size: 7}
    ];

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
