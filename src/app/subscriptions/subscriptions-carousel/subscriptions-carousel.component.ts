import { Component, OnInit } from '@angular/core';
import { allAnimation } from '../../animations/all-animation';

@Component({
  selector: 'subscriptions-carousel',
  animations: [allAnimation],
  templateUrl: './subscriptions-carousel.component.html',
  styleUrls: ['./subscriptions-carousel.component.scss']
})
export class SubscriptionsCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }




}
