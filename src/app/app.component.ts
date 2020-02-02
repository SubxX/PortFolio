import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

    trigger('routeAnimation', [
      transition('1 => 2, 2 => 3, 1 => 3', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
      transition('3 => 2, 2 => 1, 3 => 1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  activatedRoute = '';
  currentRouteAddress;
  RouteAr = [
    { icn: 'fa fa-user-circle', click: 'about me', route: 'home' },
    { icn: 'fa fa-envelope-o', click: 'skills', route: 'about' },
    { icn: 'fa fa-briefcase', click: 'projects', route: 'projects' }
  ];
  showmTop = false;
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.changeRoute('projects', 'projects');
  }
  changeRoute(click, route) {
    this.activatedRoute = click;
    this.currentRouteAddress = route;
    this.router.navigate([`/${route}`]);
  }
  getDepth(outlet) {
    return outlet.activatedRouteData.depth;
  }

  showTop() {
    this.showmTop = !this.showmTop;
  }
  showTopOutside() {
    if (this.showmTop) {
      this.showmTop = false;
    } else {
      return;
    }

  }

}

/*

    trigger('routeAnimation', [
      transition('1 => 2, 2 => 3', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
      transition('3 => 2, 2 => 1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
    ])
    */
