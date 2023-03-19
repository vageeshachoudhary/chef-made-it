import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { allAnimation } from "../../animations/all-animation";
import { CookieService } from "../cookie.service";

@Component({
  selector: "header-navigation",
  animations: [allAnimation],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  fixed: boolean = false;
  userName: string;
  constructor(private router: Router, public cookie: CookieService) {}

  ngOnInit() {
    this.setUserName();
  }

  @HostListener("window:scroll", ["$event"]) onWindowScroll(e) {
    const number = e.target.documentElement.scrollTop;
    if (number > 80) {
      this.fixed = true;
    } else if (this.fixed && number < 70) {
      this.fixed = false;
    }
  }

  setUserName(): void {
    const userDetails = JSON.parse(this.cookie.getCookie("userDetails"));
    if (userDetails.userName) {
      this.userName = userDetails.userName;
    }
  }
}
