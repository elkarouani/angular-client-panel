import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { ActivatedRoute } from "@angular/router";
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

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
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

  get id() {
    return this._id;
  }
}
