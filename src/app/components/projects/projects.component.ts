import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'Portfolio Website',
      description: 'This is my portfolio website (SPA),designed with Figma & developed with Angular 7',
      github: 'https://github.com/SubxX/PortFolio',
      tags: ['angular', 'html'],
      ghubName: 'PortFolio'
    },
    {
      title: 'WebChat Application',
      description: 'This is my college Project where Angular is used for FrontEnd and Nodejs is used for backend',
      github: 'https://github.com/SubxX/ChatApplication',
      tags: ['angular', 'nodejs', 'html'],
      ghubName: 'ChatApplication'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
