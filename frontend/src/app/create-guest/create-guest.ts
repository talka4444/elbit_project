import { Component, EventEmitter, Output } from '@angular/core';
import { GuestService } from '../services/guests';
import { Guest } from '../models/guest.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-guest',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-guest.html',
  styleUrl: './create-guest.css',
})
export class CreateGuest {
  newGuest: Omit<Guest, 'id'> = this.createEmptyGuest();
  @Output() guestCreated = new EventEmitter<void>();

  constructor(private guestService: GuestService) {}

  createEmptyGuest(): Omit<Guest, 'id'> {
    return { name: '', title: '', description: '', rating: 1 };
  }

  addGuest() {
    this.guestService.createGuest(this.newGuest).subscribe();
    this.newGuest = this.createEmptyGuest();
    this.guestCreated.emit();
  }
}
