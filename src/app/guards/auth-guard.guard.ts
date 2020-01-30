import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AngularFireAuth } from "angularfire2/auth";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuardGuard implements CanActivate {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.fireauth.authState.pipe(
      map(auth => {
        if (!auth) {
          this.router.navigate(["login"]);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
