import { Component, OnInit } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate
} from "@angular/animations";
import { fadeIn } from "../animations/fadeIn";
import { CookieService } from "../shared/cookie.service";
import { Router } from "@angular/router";

interface UserCredential {
  userName: string;
  userEmail: string;
  password: string;
  role: string;
}

interface LoginUserData {
  loginEmail: string;
  loginPassword: string;
}

@Component({
  selector: "app-login",
  animations: [
    fadeIn,
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(45%)" }),
        animate("700ms ease-in", style({ transform: "translateY(0%)" })),
      ]),
      transition(":leave", [
        animate("700ms ease-in", style({ transform: "translateY(45%)" })),
      ]),
    ]),
  ],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  visible: boolean = true;
  logInForm: boolean = true;
  signUpForm: boolean = false;
  userCredentials: UserCredential[] = [
    {
      userName: "Vageesha",
      userEmail: "vageesha.choudhary@gmail.com",
      password: "Vageesha",
      role: "user",
    },
  ];
  loginUserData: LoginUserData = {
    loginEmail: '',
    loginPassword: ''
  };

  signupUserData: UserCredential = {
    userName: '',
    userEmail: '',
    password: '',
    role: ''
  }

  signUpError: boolean = false;
  userName: string;
  logInError: boolean;

  constructor(public cookie: CookieService, private router: Router) {}

  ngOnInit() {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    if (!this.cookie.getCookie("userCredentials")) {
      this.cookie.setCookie({
        name: "userCredentials",
        value: JSON.stringify(this.userCredentials),
      });
    }

    const userDetails: UserCredential = JSON.parse(this.cookie.getCookie("userDetails"))
    if (userDetails.userName) {
      this.logInForm = false;
      this.signUpForm = false;
      this.userName = userDetails.userName;
    }
  }

  goToMenu(): void {
    let div = document.getElementById("restaurant-main").offsetTop;
    window.scrollTo({ left: 0, top: div - 100, behavior: "smooth" });
    "".toLowerCase();
  }

  openSignupPage(): void {
    this.logInForm = false;
    this.signUpForm = true;
  }

  openLoginPage(): void {
    this.logInForm = true;
    this.signUpForm = false;
  }

  login(loginUserData: LoginUserData): void {
    this.logInError = false;
    const storedUserCredentials = JSON.parse(
      this.cookie.getCookie("userCredentials")
    );
    for (let storedUserCredential of storedUserCredentials) {
      if (
        loginUserData.loginEmail.toLowerCase() ===
          storedUserCredential.userEmail &&
        loginUserData.loginPassword === storedUserCredential.password
      ) {
        this.cookie.setCookie({
          name: "userDetails",
          value: JSON.stringify({
            userName: storedUserCredential.userName,
            userEmail: storedUserCredential.userEmail,
            role: storedUserCredential.role
          })
        });
        window.location.pathname = '';
      } else {
        this.logInError = true;
      }
    }
  }

  signUp(signupUserData: UserCredential): void {
    this.signUpError = false;
    const storedUserCredentials: UserCredential[] = JSON.parse(
      this.cookie.getCookie("userCredentials")
    );
    if (
      storedUserCredentials.filter(
        (storedUserCredential: UserCredential) =>
          storedUserCredential.userEmail ===
          signupUserData.userEmail.toLowerCase()
      ).length
    ) {
      this.signUpError = true;
    } else {

      signupUserData.userEmail = signupUserData.userEmail.toLowerCase();
      storedUserCredentials.push(signupUserData);
      this.cookie.setCookie({
        name: "userCredentials",
        value: JSON.stringify(storedUserCredentials),
      });
      this.cookie.setCookie({
        name: "userDetails",
        value: JSON.stringify({
          userName: signupUserData.userName.toLowerCase(),
          userEmail: signupUserData.userEmail.toLowerCase(),
          role: signupUserData.role,
        }),
      });
      window.location.pathname = '';
    }
  }

  logout(): void {
    this.cookie.deleteCookie('userDetails');
    window.location.reload();
  }
}
