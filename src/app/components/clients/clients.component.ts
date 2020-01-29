import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { Client } from "src/app/models/client";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"]
})
export class ClientsComponent implements OnInit {
  _clients: Client[];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClient().subscribe(clients => {
      this._clients = clients;
      console.log(this._clients);
    });
  }
}
