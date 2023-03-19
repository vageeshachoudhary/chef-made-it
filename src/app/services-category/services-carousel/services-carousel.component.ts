import { Component, OnInit } from '@angular/core';
import { allAnimation } from '../../animations/all-animation';

@Component({
  selector: 'services-carousel',
  animations: [allAnimation],
  templateUrl: './services-carousel.component.html',
  styleUrls: ['./services-carousel.component.scss']
})
export class ServiceCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
