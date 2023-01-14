// module-a.js
function foo() {}
function bar() {}
function baz() {
  console.log("This is a private function");
}

module.exports.foo = foo;
module.exports.bar = bar;
