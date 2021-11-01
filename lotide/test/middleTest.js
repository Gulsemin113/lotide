const middle = require('../middle');
const assertEqualArray = require('../assertArraysEqual');


//Test Code
console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6]));

assertEqualArray(middle([1,2,3]),[2]);
assertEqualArray(middle([1,2,3,4]),[2,3]);
assertEqualArray(middle([1,2,3,4,5]),[3]);