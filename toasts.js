const allToasts = require("./modules/getToasts");


function randomInArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let random = function () {
    return randomInArray(allToasts);
}

module.exports = { random, all: allToasts }    