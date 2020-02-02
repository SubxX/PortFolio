import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.scss']
})
export class AboutSkillsComponent implements OnInit {
  skills = [
    {
      type: 'Backend', languages: [
        'Node JS', 'Express Js'
      ]
    },
    {
      type: 'DataBase & ORM', languages: [
        'Mongo DB', 'Mongoose', 'SQL'
      ]
    },
    {
      type: 'Language', languages: [
        'JavaScript', 'TypeScript'
      ]
    },
    {
      type: 'Frontend', languages: [
        'HTML', 'CSS', 'SCSS', 'JavaScript', 'React Js', 'Angular'
      ]
    },
    {
      type: 'Testing', languages: [
        'Jasmin'
      ]
    },
    {
      type: 'Others', languages: [
        'Git & GitHub', 'JWT', 'REST API'
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
