import { Component, OnInit, Input, NgZone, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { socialIcons } from './sidenav.model';
import * as $ from 'jquery';

@Component({
  selector: 'tcb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    icons: string[];
    image = true;
    user = false;
    title = 'Shyam Padia';
    socialIcons = socialIcons;
    description = 'Data Scientist, Software Engineer';
    @Input() topics: Object[];
    @Input() currentSection: number;
    private fragment: string;
    private currentFragment: string;

    constructor(private router: Router) {
        this.icons = Object.keys(this.socialIcons);
        this.router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const tree = this.router.parseUrl(this.router.url);
                if (tree.fragment) {
                    // console.log(tree.fragment);
                    const element = document.querySelector('#' + tree.fragment);
                    // console.log(element);
                    if (element) {
                        element.scrollIntoView(true);
                        if (this.user) {
                            window.scrollBy(0, -64);
                        } else {
                            window.scrollBy(0, -15);
                        }
                        this.currentFragment = tree.fragment;
                    }
                }
            }
        });
    }

    ngOnInit() {
        // $(window).scroll(function () {
        //     const scrollDistance = $(window).scrollTop();

        //     // highlight sidenav with background

        //     // Show/hide menu on scroll
        //     // if (scrollDistance >= 850) {
        //     //       $('nav').fadeIn("fast");
        //     // } else {
        //     //       $('nav').fadeOut("fast");
        //     // }

        //     // Assign active class to nav links while scolling
        //     $('.section').each(function (i) {
        //         if ($(this).position().top <= scrollDistance) {
        //             $('mat-sidenav-container a.active').removeClass('active');
        //             $('mat-sidenav-container a').eq(i).addClass('active');
        //         }
        //     });
        // }).scroll();
    }

    ngOnChanges() {
        console.log("Current Section is : " + this.currentSection);
        // console.log("section given:" + $('.section'));
           // $('.section').each(function (i) {
                // if ($(this).position().top <= scrollDistance) {
                //     $('mat-sidenav-container a.active').removeClass('active');
                //     $('mat-sidenav-container a').eq(i).addClass('active');
                // }
            // });
    }

}


