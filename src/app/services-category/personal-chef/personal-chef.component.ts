import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuDataService } from "../../api/menu/data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { trigger, style, transition, animate } from "@angular/animations";
import { Subscription } from "rxjs";
import { fadeIn } from "../../animations/fadeIn";

@Component({
  selector: "app-personal-chef",
  animations: [
    fadeIn,
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(5%)" }),
        animate("700ms ease-in", style({ transform: "translateY(0%)" })),
      ]),
      transition(":leave", [
        animate("700ms ease-in", style({ transform: "translateY(5%)" })),
      ]),
    ]),
  ],
  templateUrl: "./personal-chef.component.html",
  styleUrls: ["./personal-chef.component.scss"],
})
export class PersonalChefComponent implements OnInit {
  req: Subscription;
  data: any;
  item_search: string = "All";
  lat: number = 14.0616;
  lng: number = 121.5721;
  visible: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menuDataService: MenuDataService
  ) {}

  ngOnInit() {
    this.getMenuItem();
    this.goToMenu();
  }

  goToMenu(): void {
    let div = document.getElementById("personal-chef").offsetTop;
    window.scrollTo({ left: 0, top: div - 100, behavior: "smooth" });
  }

  getMenuItem(): void {
    this.req = this.menuDataService.getPersonalChefs().subscribe((x) => {
      this.data = x.default["top-chefs"];
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
