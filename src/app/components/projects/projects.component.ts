import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  search = {
    angular: false,
    react: false,
    nodejs: false,
    html: false,
    others: false,
    uiux: false
  };
  singlepj = {
    title: '',
    description: '',
    github: ''
  };
  projects = [
    {
      title: 'Portfolio Website',
      description: 'This is my portfolio website (SPA),designed with Figma & developed with Angular 7',
      github: 'https://github.com/SubxX/PortFolio',
      tags: ['angular']
    },
    {
      title: 'WebChat Application',
      description: 'This is my college Project where Angular is used for FrontEnd and Nodejs is used for backend',
      github: 'https://github.com/SubxX/ChatApplication',
      tags: ['angular', 'nodejs']
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  changeSearch(item) {
    let newAR = [];
    this.search[item] = !this.search[item];
    for (const key in this.search) {
      if (this.search[key]) {
        newAR = this.projects.filter((project) => {
          if (project.tags.includes(key)) {
            console.log('includes 1');
            return project;
          }
        });
      }
    }
    console.log(newAR);
  }
  showaProject(item) {
    this.singlepj = item;
  }
}
