import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { Client } from "src/app/models/client";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"]
})
export class ClientsComponent implements OnInit {
  _clients: Client[];
  _total: number;

  constructor(
    private clientService: ClientService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {}

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

  deleteClient(id: string) {
    if (confirm("Are you sure to delete this client ?")) {
      this.clientService.deleteClient(id);
      this.flashMessage.show("Client deleted !", {
        cssClass: "alert-danger",
        timeout: 4000
      });
      this.router.navigate(["/"]);
    }
  }
}
