const EventEmitter = require("events");

class PhoneBook extends EventEmitter {
  constructor(contact) {
    super();
    this.contact = contact;
  }

  addContact(contact) {
    this.on(contact, (msg) => {
      console.log(`Message to ${contact}: ${msg}`);
    });
  }

  sendMessage(contact, msg) {
    this.emit(contact, msg);
  }
}

const myPhoneBook = new PhoneBook("Tim");
myPhoneBook.addContact("Jaryn");
myPhoneBook.sendMessage("Jaryn", "Hope you are having a good class :)");
// myPhoneBook.sendMessage("Jules", "SOrry its so much at once");
