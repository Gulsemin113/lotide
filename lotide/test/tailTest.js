
const tail = require ('../tail');
const assertEqualArray = require('../assertArraysEqual');


// TEST CODE
assertEqualArray(tail([5,6,7]), [6,7]);
assertEqualArray(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
