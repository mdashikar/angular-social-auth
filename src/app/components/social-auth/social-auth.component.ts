import { Component, OnInit } from "@angular/core";
import { AuthService, SocialUser } from "angularx-social-login";
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angularx-social-login";

@Component({
  selector: "app-social-auth",
  templateUrl: "./social-auth.component.html",
  styleUrls: ["./social-auth.component.css"]
})
export class SocialAuthComponent implements OnInit {
  user: SocialUser;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }
  signInWithGoogle(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(x => console.log(x));
  }
  signInWithFB(): void {
    this.authService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then(x => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  }
}
