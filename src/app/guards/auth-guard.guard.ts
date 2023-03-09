import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
// import { AngularFireAuth } from "angularfire2/auth";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuardGuard implements CanActivate {
  // constructor(private fireauth: AngularFireAuth, private router: Router) {}
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    throw new Error("Method not implemented.");
  }

  // canActivate(): Observable<boolean> {
    // return this.fireauth.authState.pipe(
    //   map(auth => {
    //     if (!auth) {
    //       this.router.navigate(["login"]);
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   })
    // );
  // }
}
