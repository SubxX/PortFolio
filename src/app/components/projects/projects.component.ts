import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  openModal = false;
  search = {
    angular: false,
    react: false,
    nodejs: false,
    html: false,
    others: false,
    uiux: false
  };
  constructor() { }

  ngOnInit() {
  }
  open() {
    this.openModal = !this.openModal;
  }
  changeSearch(item) {
    this.search[item] = !this.search[item];
    console.log(this.search);
  }
}
