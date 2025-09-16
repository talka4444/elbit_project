import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../models/guest.model';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  createGuest(guest: Omit<Guest, 'id'>): Observable<Guest> {
    return this.http.post<Guest>(`${this.apiUrl}/guest`, guest);
  }

  getGuest(guestId: number): Observable<Guest> {
    return this.http.get<Guest>(`${this.apiUrl}/guest/${guestId}`);
  }

  getAllGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.apiUrl + '/guests');
  }
}
