import { Component, OnInit } from "@angular/core";
import { scrollAnimation } from "../../animations/slide-in";
import { fadeIn } from "../../animations/fadeIn";

@Component({
  selector: "app-subscriptions",
  animations: [scrollAnimation, fadeIn],
  templateUrl: "./subscriptions.component.html",
  styleUrls: ["./subscriptions.component.scss"],
})
export class SubscriptionsComponent implements OnInit {
  lat: number = 14.0616;
  lng: number = 121.5721;
  state: string = "show";

  constructor() {}

  ngOnInit() {}
}
