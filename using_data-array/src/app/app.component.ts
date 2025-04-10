import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item/user-item.component';
import { HelloWorldComponent } from './hello-world/hello-world.component'; // Importa HelloWorldComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserItemComponent, HelloWorldComponent], // Aggiungi HelloWorldComponent qui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-data';
}
