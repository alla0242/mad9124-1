"use strict"

const EventEmitter = require("events");

class Notification extends EventEmitter {
  constructor(channel, message) {
    super();
    this.channel = channel;
    this.message = message;
    this.init();
  }

  init() {
    this.on(this.channel, (msg) =>
      console.log(`[SMS to 123-123-1234]: ${msg}`)
    );
  }

  send() {
    this.emit(this.channel, this.message);
  }
}

const sms = new Notification("123-123-1234", "This is a text");

sms.send();
