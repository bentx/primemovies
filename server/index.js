require("ignore-styles");
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
require("@babel/register")({
  ignore: [/(node_module)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./server");
