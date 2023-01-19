const foo = () => {
  console.log("Hooray!");
};

function bar() {
  console.log("Bar");
}

const somethingElse = "123123123";
const somethingNumber = 123123123;

module.exports = foo;

module.exports = {
  foo,
  bar,
  somethingElse,
  somethingNumber,
};

// module.exports.bar = foo;
// module.exports.bar = bar;
// module.exports.somethingElse = somethingElse;
// module.exports.somethingNumber = somethingNumber;
