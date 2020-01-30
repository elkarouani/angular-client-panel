import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { Client } from "src/app/models/client";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
import swal from "sweetalert2";

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
    swal
      .fire({
        title: "Deleting this client ?",
        text: "Are you sure to delete this client ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it"
      })
      .then(result => {
        if (result.value) {
          this.clientService.deleteClient(id);
          this.flashMessage.show("Client deleted !", {
            cssClass: "alert-danger",
            timeout: 4000
          });
          this.router.navigate(["/"]);
          swal.fire({
            title: "Deleted!",
            text: "Client deleted",
            icon: "success",
            timer: 3000
          });
        }
      });
  }
}
