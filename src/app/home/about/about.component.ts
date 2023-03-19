import { Component, OnInit } from "@angular/core";
import { fadeIn } from "../../animations/fadeIn";
import { slideIn } from "../../animations/slide-in";
import { allAnimation } from "../../animations/all-animation";

@Component({
  selector: "about",
  animations: [fadeIn, slideIn, allAnimation],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  visible: boolean = true;
  constructor() {}

  ngOnInit() {}
}
