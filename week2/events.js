const event = require("events");

const myEventEmitter = new event.EventEmitter();

myEventEmitter.on("textMessage", ({ msg }) => {
  console.log(`Text message: ${msg}`);
  myEventEmitter.emit("textResponse", true);
});

myEventEmitter.on("textResponse", ({ msg }) => {
  console.log(`Text received`);
});

setTimeout(() => {
  myEventEmitter.emit("textMessage", {
    msg: "Hello, world!",
    phoneNumber: "444-444-4444",
  });
}, 3000);
