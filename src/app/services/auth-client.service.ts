import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthClientService {
  constructor(private fireauth: AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.fireauth.auth.signInWithEmailAndPassword(email, password).then(
        userData => resolve(userData),
        error => reject(error)
      );
    });
  }

  getAuth() {
    return this.fireauth.authState.pipe(map(auth => auth));
  }
}
