"use strict";

const xss = require("xss");

// <div>123</div> -> 123

console.log(
  xss("<div class='class' href='123'>123</div>", {
    whiteList: { div: ["class"] }, // empty, means filter out all tags
    stripIgnoreTag: true, // filter out all HTML not in the whitelist
    stripIgnoreTagBody: ["script"],
    // the script tag is a special case, we need
    // to filter out its content
  })
);
