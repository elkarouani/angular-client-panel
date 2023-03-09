import { Component, OnInit } from "@angular/core";
import { AuthClientService } from "src/app/services/auth-client.service";
// import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  _is_authenticated: boolean = false;
  _current_user: string;

  constructor(
    private authService: AuthClientService,
    // private flashMessage: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.authService.getAuth().subscribe(auth => {
    //   if (auth) {
    //     this._is_authenticated = true;
    //     this._current_user = auth.email;
    //   } else {
    //     this._is_authenticated = false;
    //   }
    // });
  }

  get is_authenticated() {
    return this._is_authenticated;
  }

  get current_user() {
    return this._current_user;
  }

  onLogOut() {
    this.authService.logOut();
    return this.router.navigate(["login"]);
  }
}
