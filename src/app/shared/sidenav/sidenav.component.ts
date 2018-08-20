import { Component, OnInit, Input, NgZone, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'tcb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    image = true;
    user = false;
    title = 'Shyam Padia';
    description = 'Data Scientist, Software Engineer';
    @Input() topics: Object[];
    private fragment: string;
    private currentFragment: string;

    constructor(private router: Router) {
        this.router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const tree = this.router.parseUrl(this.router.url);
                if (tree.fragment) {
                    console.log(tree.fragment);
                    const element = document.querySelector('#' + tree.fragment);
                    console.log(element);
                    if (element) {
                        element.scrollIntoView(true);
                        this.currentFragment = tree.fragment;
                    }
                }
            }
        });
    }

    ngOnInit() {
            $(window).scroll(function () {
                const scrollDistance = $(window).scrollTop();

                // Show/hide menu on scroll
                // if (scrollDistance >= 850) {
                // 		$('nav').fadeIn("fast");
                // } else {
                // 		$('nav').fadeOut("fast");
                // }

                // Assign active class to nav links while scolling
                $('.section').each(function (i) {
                    if ($(this).position().top <= scrollDistance) {
                        console.log(i);
                        console.log(scrollDistance);
                        console.log($(this).position().top);
                        $('mat-sidenav-container a.active').removeClass('active');
                        $('mat-sidenav-container a').eq(i).addClass('active');
                    }
                });
            }).scroll();
    }

}
