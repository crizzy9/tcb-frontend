import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tcb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  topics: string[] = [];
  image: boolean = true;
  user: boolean = false;
  title: string = "Shyam Padia";
  description: string = "Data Scientist, Software Engineer";

  constructor() { }

  ngOnInit() {
    this.topics = ["Main 1", "Main 2", "Main 3", "Main 4"];
  }

}
