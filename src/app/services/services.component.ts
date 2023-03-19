import { Component, OnInit } from "@angular/core";
import { trigger, style, transition, animate } from "@angular/animations";
import { fadeIn } from "../animations/fadeIn";

@Component({
  selector: "app-services",
  animations: [
    fadeIn,
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(20%)" }),
        animate("700ms ease-in", style({ transform: "translateY(0%)" })),
      ]),
      transition(":leave", [
        animate("700ms ease-in", style({ transform: "translateY(20%)" })),
      ]),
    ]),
  ],
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  visible: boolean = true;

  constructor() {}

  ngOnInit() {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }

  goToMenu(): void {
    let div = document.getElementById("services").offsetTop;
    window.scrollTo({ left: 0, top: div - 100, behavior: "smooth" });
  }
}
