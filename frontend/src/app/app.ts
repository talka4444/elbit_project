import { Component, signal } from '@angular/core';
import { CreateGuest } from './create-guest/create-guest';
import { GuestsInformation } from './guests-information/guests-information';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CreateGuest, GuestsInformation, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isCreateGuestOpen = false;

  toggleCreateGuest() {
    this.isCreateGuestOpen = !this.isCreateGuestOpen;
  }
}
