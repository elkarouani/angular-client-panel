import { Component, OnInit } from "@angular/core";
import { AuthClientService } from "src/app/services/auth-client.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  _email: string;
  _password: string;

  constructor(
    private authService: AuthClientService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {}

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

  onRegister() {
    this.authService
      .register(this._email, this._password)
      .then(register => {
        this.flashMessage.show("You are registered successfully", {
          cssClass: "alert-success",
          timeout: 5000
        });

        this.router.navigate(["/"]);
      })
      .catch(error => {
        this.flashMessage.show(error.message, {
          cssClass: "alert-danger",
          timeout: 10000
        });
      });
  }
}
