import { Injectable } from "@angular/core";
// import { AngularFireAuth } from "angularfire2/auth";
import { map } from "rxjs/operators";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthClientService {
  // constructor(private fireauth: AngularFireAuth) {}
  constructor() {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // this.fireauth.auth.signInWithEmailAndPassword(email, password).then(
      //   userData => resolve(userData),
      //   error => reject(error)
      // );
    });
  }

  loginWithGoogle() {
    return new Promise((resolve, reject) => {
      // this.fireauth.auth
      //   .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      //   .then(
      //     userData => resolve(userData),
      //     error => reject(error)
      //   );
    });
  }

  getAuth() {
    // return this.fireauth.authState.pipe(map(auth => auth));
  }

  logOut() {
    // this.fireauth.auth.signOut();
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // this.fireauth.auth.createUserWithEmailAndPassword(email, password).then(
      //   userData => resolve(userData),
      //   error => reject(error)
      // );
    });
  }
}
