require("./db");
const Dog = require("./models/Dog");
const Owner = require("./models/Owner");

const createOne = async () => {
  // create a dog
  const dog = new Dog({
    name: "link",
    dob: new Date(),
  });

  dog.insert;
  await dog.save();
  // return the dog
  return dog;
};

const createMany = async () => {
  const dogNames = [
    "eddy",
    "santas little helper",
    "clifford",
    "snoopy",
    "lassie",
    "dylan",
  ];
  const dates = [
    new Date("2020-01-01"),
    new Date("2010-01-01"),
    new Date("2000-01-01"),
    new Date("1990-01-01"),
  ];
  const createdDogs = await Dog.insertMany(
    dogNames.map((name) => ({
      name,
      dob: dates[Math.floor(Math.random() * dates.length)],
      howGood: Math.floor(Math.random() * 10) + 1,
    }))
  );
  return createdDogs;
};

const getAll = async () => {
  // return all the dogs
  const dogs = await Dog.find();
  return dogs;
};

const findById = async (id) => {
  //return specific dog
  const dog = await Dog.findById(id);
  return dog;
};

const bestDogs = async () => {
  // get me dogs with howGood === 10
  const goodBoys = await Dog.find({ howGood: 10 });
  return goodBoys;
};

const getMyPals = async (id) => {
  const dog = await Dog.findById(id).populate("pals").select({
    pals: 1,
  });
  return dog.pals;
};

const updateOne = async (id) => {
  const updatedDog = await Dog.findByIdAndUpdate(
    id,
    {
      howGood: 7,
    },
    {
      returnOriginal: false,
    }
  );
  return updatedDog;
};

const giveEddyPals = async (id) => {
  const ids = [
    "640a8ceeda6defc6c68b0dd2",
    "640a8ceeda6defc6c68b0dd0",
    "640a8ceeda6defc6c68b0dd4",
  ];
  const updatedDog = await Dog.findByIdAndUpdate(
    id,
    {
      pals: ids,
    },
    { returnOriginal: false }
  );

  return updatedDog;
};

const deleteOne = async (id) => {
  // delete dog and return deleted value
  const dog = await Dog.findByIdAndDelete(id);
  return dog;
};

const main = async () => {
  // call a function
  // const id = "640a8ceeda6defc6c68b0dcf";
  // const res = await deleteOne(id);
  // console.log(res)
};

const ownerFunction = async () => {
  // const owner = new Owner({
  //   name: "tim",
  //   dogs: ["640a8ceeda6defc6c68b0dd4", "64125162eda84e7231f36a37"],
  // });
  // await owner.save();
  // const owner = await Owner.findById("6412555002fe86f799ebb6ca").populate(
  //   "dogs, pals"
  // );
  // const dylan = await Dog.findByIdAndUpdate(
  //   "640a8ceeda6defc6c68b0dd4",
  //   {
  //     pals: ["640a8ceeda6defc6c68b0dd4"],
  //   },
  //   {
  //     returnOriginal: false,
  //   }
  // );

  const owner = await Owner.findOne({ name: "tim" }).populate({
    path: "dogs",
    populate: {
      path: "pals",
    },
  });
  // const dylan2 = await Dog.find().where("name").equals("dylan");

  owner.dogs.forEach((dog) => {
    console.log(dog);
  });
  // console.log(dylan2);
};

// main();
ownerFunction();

// class Test {
//   constructor(name) {
//     this.test = name;
//   }

//   static staticTestMethod() {
//     console.log("static" + this.test);
//   }

//   testMethod() {
//     console.log("not static" + this.test);
//   }
// }

// const something = new Test("something");

// console.log(Test.staticTestMethod());
// console.log(something.testMethod());
