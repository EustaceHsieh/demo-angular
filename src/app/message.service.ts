import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(logData: string) {
    this.messages.push(logData);
  }

  clear() {
    this.messages = [];
  }
}
