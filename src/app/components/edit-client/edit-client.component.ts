import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { ActivatedRoute, Router } from "@angular/router";
// import { FlashMessagesService } from "angular2-flash-messages";
import { Client } from "src/app/models/client";

@Component({
  selector: "app-edit-client",
  templateUrl: "./edit-client.component.html",
  styleUrls: ["./edit-client.component.scss"]
})
export class EditClientComponent implements OnInit {
  _id: string;
  _client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    balance: 0
  };

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    // private flashMessage: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {
    // this._id = this.route.snapshot.params["id"];
    // this.clientService.getClient(this._id).subscribe(client => {
    //   this._client = client;
    // });
  }

  get client() {
    return this._client;
  }

  set client(value) {
    this._client = value;
  }

  onSubmit() {
    this.client.id = this._id;
    this.clientService.updateClient(this.client);
    // this.flashMessage.show("Client updated !", {
    //   cssClass: "alert-success",
    //   timeout: 4000
    // });
    this.router.navigate(["client", this._id]);
  }
}
