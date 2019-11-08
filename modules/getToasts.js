const fs = require('fs');
var path = require("path");
let rawdata = fs.readFileSync(path.resolve("./toasts/toasts.json"));
let toasts = JSON.parse(rawdata);

module.exports = toasts;