import { Injectable } from "@angular/core";
// import {
//   AngularFirestore,
//   AngularFirestoreCollection,
//   AngularFirestoreDocument
// } from "angularfire2/firestore";
import { Client } from "../models/client";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  // _clients_collection: AngularFirestoreCollection<Client>;
  // _client_document: AngularFirestoreDocument<Client>;

  // constructor(private firestore: AngularFirestore) {
  //   this._clients_collection = this.firestore.collection("clients");
  // }
  constructor() {}

  // getClients(user: string): Observable<Client[]> {
    // return this.firestore
    //   .collection("clients", ref => ref.where("user", "==", user))
    //   .snapshotChanges()
    //   .pipe(
    //     map(actions => {
    //       return actions.map(a => {
    //         const data = a.payload.doc.data() as Client;
    //         const id = a.payload.doc.id;
    //         return { id, ...data };
    //       });
    //     })
    //   );
  // }
  getClients(user: string) {}

  newClient(client: Client) {
    // this._clients_collection.add(client);
  }

  // getClient(id: string): Observable<Client> {
    // return this._clients_collection.doc(id).valueChanges();
  // }
  getClient(id: string) {}

  updateClient(client: Client) {
    // this._client_document = this._clients_collection.doc(client.id);
    // this._client_document.update(client);
  }

  deleteClient(id: string) {
    // this._client_document = this._clients_collection.doc(id);
    // this._client_document.delete();
  }
}
