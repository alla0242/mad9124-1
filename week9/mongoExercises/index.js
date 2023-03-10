require("./db");
const Dog = require("./models/Dog");

const createOne = async () => {
  // create a dog, return created dog
  const newDog = new Dog({
    name: "clifford",
    dob: Date.now(),
    howGood: 9,
    pals: [],
  });
  await newDog.save();
  return newDog;
};

const createMany = async () => {
  const dogNames = [
    "odie",
    "yeller",
    "eddie",
    "poochie",
    "bryan",
    "santas little helper",
  ];
  const dates = [
    new Date("2000-01-01"),
    new Date("2019-07-07"),
    new Date("2009-10-12"),
  ];
  const result = await Dog.insertMany(
    dogNames.map((name) => ({
      name,
      dob: dates[Math.floor(Math.random() * dates.length)],
      howGood: Math.floor(Math.random() * 10) + 1,
    }))
  );
  return result;
};

const getAll = async () => {
  // get all the dogs
  const dogs = await Dog.find();
  return dogs;
};



const main = async () => {
  const res = await getAll();
  console.log(res);
};

main();
