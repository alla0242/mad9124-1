const mongoose = require("mongoose");

main();

async function main() {
  // connect to mongodb
  await mongoose.connect("mongodb://localhost:27017/test");
  console.log("connected!");

  // define our schema
  const Cat = mongoose.model("cat", { name: String, age: Number });

  // save
  const garfield = new Cat({ name: "tim", age: 1 });
  await garfield.save();

  await mongoose.disconnect();
  console.log("disconnected");
}
