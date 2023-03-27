"use strict";

const debug = require("debug")("app:sanitize");
const xss = require("xss");

/**
 * the ... attributes below, assigns variables to id and _id, and keeps everything
 * else in an object called attributes
 {
    id: 1,
    tim: 'tim',
    name: 'tim'
 }
    id = 1
    attributes = {
        tim: 'tim',
        name: 'tim'
    }
 */

const sanitizeBody = (req, _res, next) => {
  const { id, _id, ...attributes } = req.body;
  debug(req.body);

  for (const key in attributes) {
    attributes[key] = xss(attributes[key], {
      whiteList: [], // empty, means filter out all tags
      stripIgnoreTag: true, // filter out all HTML not in the whitelist
      stripIgnoreTagBody: ["script"],
      // the script tag is a special case, we need
      // to filter out its content
    });
  }
  req.sanitizedBody = attributes;
  debug(req.sanitizedBody);
  next();
};

module.exports = sanitizeBody;
