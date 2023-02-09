let startTime = Date.now();

function log(txt) {
  const now = Date.now();
  console.log(txt);
  console.log(`${now - startTime}ms`);
  startTime = now;
}

const users = [
  { id: "1", name: "tim", role: "ADMIN" },
  { id: "2", name: "adam", role: "USER" },
  { id: "3", name: "mickey", role: "USER" },
  { id: "4", name: "sandra", role: "USER" },
];

const sleep = (time) => new Promise((res) => setTimeout(res, time));

const getUsersName = async (id) => {
  await sleep(1000);
  const user = users.find((user) => user.id === id);
  if (!user) throw new Error("User not found");
  return user.name;
};

// async function getTimAndAdam() {
//   getUsersName("1").then((tim) => {
//     getUsersName("2").then((adam) => {
//       log([tim, adam]);
//     });
//   });
// }

// async function getTimAndAdam() {
//   const tim = await getUsersName("1");
//   const adam = await getUsersName("2");

//   log([tim, adam]);
// }

// async function myPreferredWay() {
//   const ids = ["1", "2"];
//   const array = await Promise.all(ids.map((id) => getUsersName(id)));

//   log(array);
// }

// myPreferredWay();

// async function forAwait() {
//   const promises = [getUsersName("1"), getUsersName("2")];

//   for await (username of promises) {
//     log(username);
//   }
// }

// forAwait();

// async function ifAwait() {
//   if ((await getUsersName("2")) === "tim") {
//     log("I am tim");
//   } else {
//     log("not tim");
//   }
// }

// ifAwait();

async function main() {
  await getUsersName("1").then((tim) => {
    log(tim);
  });

  log("sommthing else");
}

main();
