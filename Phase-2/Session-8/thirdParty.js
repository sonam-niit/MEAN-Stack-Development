var _ = require('lodash');

const version= _.VERSION;
console.log(version);

let list=['a','b','c','d','e','f','g'];
console.log("first Element "+_.first(list));
console.log("Last Element "+_.last(list));