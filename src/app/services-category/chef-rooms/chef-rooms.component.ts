import { Component, OnInit } from "@angular/core";
import { fadeIn } from "../../animations/fadeIn";
import { Router } from "@angular/router";
import { CookieService } from "src/app/shared/cookie.service";

@Component({
  selector: "app-chef-rooms",
  animations: [fadeIn],
  templateUrl: "./chef-rooms.component.html",
  styleUrls: ["./chef-rooms.component.scss"],
})
export class ChefRoomsComponent implements OnInit {
  userName: string;

  constructor(private router: Router, public cookie: CookieService) {}

  ngOnInit() {
    let div = document.getElementById("chef-rooms").offsetTop;
    window.scrollTo({ left: 0, top: div - 100, behavior: "smooth" });
  }
  chatFeature(): void {
    const userDetails = this.cookie.getCookie("userDetails");
    if (!userDetails) {
      this.router.navigate(["/login"]);
    } else this.router.navigate(["/subscriptions"]);
  }
}
