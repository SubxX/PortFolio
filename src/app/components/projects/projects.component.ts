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
      tags: ['angular', 'html']
    },
    {
      title: 'WebChat Application',
      description: 'This is my college Project where Angular is used for FrontEnd and Nodejs is used for backend',
      github: 'https://github.com/SubxX/ChatApplication',
      tags: ['angular', 'nodejs', 'html']
    }
  ];
  shownAR = [];
  constructor() { }

  ngOnInit() {
    this.shownAR = this.projects;
  }
  async changeSearch(item) {
    this.search[item] = !this.search[item];
    this.updateSearchObj(item);
    this.shownAR = this.projects.filter((project) => {
      if (project.tags.includes(item)) {
        return project;
      }
    });
    this.checkifAllTrue().then((d) => {
      this.shownAR = this.projects;
    }).catch((d) => {
      return;
    });
  }
  showaProject(item) {
    this.singlepj = item;
  }
  checkifAllTrue() {
    return new Promise((resolve, reject) => {
      let ar = [];
      Object.keys(this.search).forEach((key) => {
        if (this.search[key]) {
          ar.push('true');
        }
      });
      if (ar.length > 0) {
        reject('true');
      } else {
        resolve('false');
      }
    });
  }
  updateSearchObj(item) {
    for (const key in this.search) {
      if (key !== item) {
        this.search[key] = false;
      }
    }
  }

}
