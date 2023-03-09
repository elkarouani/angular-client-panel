import { Component, OnInit } from "@angular/core";
import { AuthClientService } from "src/app/services/auth-client.service";
// import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  _email: string;
  _password: string;

  constructor(
    private authService: AuthClientService,
    // private flashMessage: FlashMessagesService,
    private route: Router
  ) {}

  ngOnInit() {
    // this.authService.getAuth().subscribe(auth => {
    //   if (auth) {
    //     return this.route.navigate(["/"]);
    //   }
    // });
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  set email(value) {
    this._email = value;
  }

  set password(value) {
    this._password = value;
  }

  onLogin() {
    this.authService
      .login(this.email, this.password)
      .then(auth => {
        if (auth) {
          // this.flashMessage.show("You are logged successfully", {
          //   cssClass: "alert-success",
          //   timeout: 5000
          // });

          this.route.navigate(["/"]);
        }
      })
      .catch(error => {
        // this.flashMessage.show(error.message, {
        //   cssClass: "alert-danger",
        //   timeout: 10000
        // });
      });
  }

  onLoginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then(auth => {
        if (auth) {
          // this.flashMessage.show("You are logged successfully", {
          //   cssClass: "alert-success",
          //   timeout: 5000
          // });

          this.route.navigate(["/"]);
        }
      })
      .catch(error => {
        // this.flashMessage.show(error.message, {
        //   cssClass: "alert-danger",
        //   timeout: 10000
        // });
      });
  }
}
