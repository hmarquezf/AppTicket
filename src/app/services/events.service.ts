import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlServer="";
  constructor() { }

  getEvents() {
    return fetch(`${this.urlServer}/events`).then(
      response => response.json()
    );
  }
}
