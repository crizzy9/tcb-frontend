import { Component, OnInit, Input, AfterViewInit, NgZone, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'tcb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

    image = true;
    user = false;
    title = 'Shyam Padia';
    description = 'Data Scientist, Software Engineer';
    @Input() topics: Object[];
    private fragment: string;

    constructor(private route: ActivatedRoute, private router: Router, private zone: NgZone, @Inject(DOCUMENT) document) {
        // router.events.subscribe(s => {
        //     if (s instanceof NavigationEnd) {
        //         const tree = router.parseUrl(router.url);
        //         if (tree.fragment) {
        //             console.log(tree.fragment);
        //             const element = document.getElementById('#' + tree.fragment);
        //             console.log(element);
        //             if (element) { element.scrollIntoView(true); }
        //         }
        //     }
        // });
    }

    ngOnInit() {
        // this.router.navigate( ['/somepath', id ], {fragment: 'test'});
        this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

    //     this.route.fragment.subscribe(f => {
    //         const element = document.querySelector('#' + f);
    //         console.log(element);
    //         if (element) {
    //             element.scrollIntoView(); // <-- omit element from the argument
    //         }
    //    });

        // this.zone.run(() => {
        //     $(document).ready(function () {
        //         $('a[href*="#"]').bind('click', function (e) {
        //             e.preventDefault(); // prevent hard jump, the default behavior

        //             const target = $(this).attr('href'); // Set the target as variable
        //             console.log(target);
        //             // perform animated scrolling by getting top-position of target-element and set it as scroll target
        //             $('html, body').stop().animate({
        //                 scrollTop: $(target).offset().top
        //             }, 600, function () {
        //                 location.hash = target; // attach the hash (#jumptarget) to the pageurl
        //             });

        //             return false;
        //         });
        //     });

        //     $(window).scroll(function () {
        //         const scrollDistance = $(window).scrollTop();

        //         // Show/hide menu on scroll
        //         // if (scrollDistance >= 850) {
        //         // 		$('nav').fadeIn("fast");
        //         // } else {
        //         // 		$('nav').fadeOut("fast");
        //         // }

        //         // Assign active class to nav links while scolling
        //         $('.section').each(function (i) {
        //             if ($(this).position().top <= scrollDistance) {
        //                 console.log(i);
        //                 console.log(scrollDistance);
        //                 console.log($(this).position().top);
        //                 $('mat-sidenav-container a.active').removeClass('active');
        //                 $('mat-sidenav-container a').eq(i).addClass('active');
        //             }
        //         });
        //     }).scroll();
        // });


    }

    ngAfterViewInit(): void {
        try {
            const element = document.getElementById('#' + this.fragment);
            console.log(element);
            if (element) {
                setTimeout(() => { element.scrollIntoView(true); });
            }
        } catch (e) { }
      }

}
