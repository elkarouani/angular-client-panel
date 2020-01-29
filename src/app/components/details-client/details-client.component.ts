import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { Client } from "src/app/models/client";

@Component({
  selector: "app-details-client",
  templateUrl: "./details-client.component.html",
  styleUrls: ["./details-client.component.scss"]
})
export class DetailsClientComponent implements OnInit {
  _id: string;
  _client: Client;
  _showBalance: boolean = false;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this._id = this.route.snapshot.params["id"];
    this.clientService.getClient(this._id).subscribe(client => {
      this._client = client;
    });
  }

  get client() {
    return this._client;
  }

  set client(value) {
    this._client = value;
  }

  get id() {
    return this._id;
  }

  get showBalance() {
    return this._showBalance;
  }

  set showBalance(value) {
    this._showBalance = value;
  }

  onSubmit() {
    this.client.id = this._id;
    this.clientService.updateClient(this.client);
    this.flashMessage.show("Balance updated !", {
      cssClass: "alert-warning",
      timeout: 4000
    });
  }

  deleteClient() {
    if (confirm("Are you sure to delete this client ?")) {
      this.clientService.deleteClient(this._id);
      this.flashMessage.show("Client deleted !", {
        cssClass: "alert-danger",
        timeout: 4000
      });
      this.router.navigate(["/"]);
    }
  }
}
