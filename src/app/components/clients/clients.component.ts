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
  _total: number;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this._clients = clients;
      this._total = this._clients.reduce((total, client) => {
        return total + client.balance;
      }, 0);
    });
  }

  get clients() {
    return this._clients;
  }

  get total() {
    return this._total;
  }
}
