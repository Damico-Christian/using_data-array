import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[]; // Array di nomi

  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; // Popola l'array con nomi
  }

  ngOnInit(): void {}
}

