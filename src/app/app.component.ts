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
  hideAlert = false;
  title = 'portfolio';
  activatedRoute = '';
  currentRouteAddress;
  openSocialBtn = false;
  RouteAr = [
    { icn: 'fas fa-user-circle fa-routing', click: 'about me', route: 'home' },
    { icn: 'fas fa-cogs fa-routing', click: 'skills', route: 'about' },
    { icn: 'fas fa-sticky-note fa-routing', click: 'projects', route: 'projects' }
  ];
  showmTop = false;
  socials = [
    { icn: 'fab fa-facebook-square fa-social', link: 'https://www.facebook.com/subham.bhattacharya.subX' },
    { icn: 'fab fa-github fa-social', link: 'https://github.com/SubxX' },
    { icn: 'fab fa-linkedin fa-social', link: 'https://www.linkedin.com/in/subham-bhattacharya-b66b49145/' },
  ];

  constructor(private router: Router) {

  }
  ngOnInit() {
    this.changeRoute('about me', 'home');
    this.showHideAlert();
  }
  openSocialBtnContainer() {
    this.openSocialBtn = !this.openSocialBtn;
  }
  showHideAlert() {
    setTimeout(() => {
      this.hideAlert = true;
      setTimeout(() => {
        this.hideAlert = false;
      }, 5000);
    }, 1000);
  }
  changeRoute(click, route) {
    this.router.navigate([`/${route}`]).then(() => {
      this.activatedRoute = click;
      this.currentRouteAddress = route;
    });
  }
  getDepth(outlet) {
    return outlet.activatedRouteData.depth;
  }

  showTop() {
    this.showmTop = !this.showmTop;
  }
  showTopOutside() {
    if (this.showmTop || this.openSocialBtn) {
      this.showmTop = false;
      this.openSocialBtn = false;
    } else {
      return;
    }
  }

}

