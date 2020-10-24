import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-devbae-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    particlesJS.load('particles-js', '/assets/particles.json');
  }

}
