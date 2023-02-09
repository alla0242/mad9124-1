// Callbacks
let startTime = Date.now();

function log(txt) {
  const now = Date.now();
  console.log(txt);
  console.log(`${now - startTime}ms`);
  startTime = now;
}

// function mainFunction(callback) {
//   let i = 0;
//   while (i < 100000000) {
//     i += 1;
//   }
//   callback(i);
// }

// mainFunction((num) => {
//   log(num);
// });

// const pokemonResponse = fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((response) => {
//     response.json().then((data) => {
//       log(data.results.map(({ name }) => name));
//     });
//   })
//   .catch((err) => {
//     console.log("er", err);
//   });

// async function main() {
//   try {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//     const data = await response.json();
//     log(data.results.map(({ name }) => name));
//   } catch (error) {
//     console.log("err", error);
//   }
//   console.log("do something dangerous");
// }

main();
