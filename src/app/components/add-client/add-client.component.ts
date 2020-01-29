import { Component, OnInit } from "@angular/core";
import { Client } from "src/app/models/client";
import { ClientService } from "src/app/services/client.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.scss"]
})
export class AddClientComponent implements OnInit {
  _client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    balance: 0
  };

  constructor(private clientService: ClientService, private route: Router) {}

  ngOnInit() {}

  get client() {
    return this._client;
  }

  onSubmit() {
    this.clientService.newClient(this.client);
    return this.route.navigate(["/"]);
  }
}
