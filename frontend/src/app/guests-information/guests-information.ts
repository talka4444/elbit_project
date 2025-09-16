import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guests';
import { CommonModule } from '@angular/common';
import { Guest } from '../models/guest.model';

@Component({
  selector: 'app-guests-information',
  imports: [CommonModule],
  templateUrl: './guests-information.html',
  styleUrl: './guests-information.css',
})
export class GuestsInformation implements OnInit {
  guests: Guest[] = [];
  selectedGuest: Guest | null = null;
  showModal = false;

  constructor(private guestService: GuestService) {}

  ngOnInit() {
    this.guestService.getAllGuests().subscribe((guests) => {
      this.guests = guests;
    });
  }

  openModal(guestId: number) {
    this.guestService.getGuest(guestId).subscribe((guest) => {
      this.selectedGuest = guest;
      this.showModal = true;
    });
  }

  closeModal() {
    this.showModal = false;
    this.selectedGuest = null;
  }
}
