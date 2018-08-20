import { Component, OnInit } from '@angular/core';

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
        kaggle: {
            url: 'https://www.kaggle.com/gottron',
            icon: 'assets/icons/kaggle.png',
        },
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
        youtube: {
            url: 'https://www.youtube.com/user/shyampadia',
            icon: 'assets/icons/youtube.png',
        },
        spotify: {
            url: 'https://open.spotify.com/user/exmachina9',
            icon: 'assets/icons/spotify.png',
        },
        reddit: {
            url: 'https://www.reddit.com/user/crizzy_mcawesome',
            icon: 'assets/icons/reddit.png',
        }
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

    constructor() {
        this.icons = Object.keys(this.socialIcons);
    }

    ngOnInit() {
    }

}
