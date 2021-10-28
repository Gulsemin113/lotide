const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let element of Object.keys(object1)) {
    if (Array.isArray(object1[element])) {
      if (!eqArrays(object1[element],object2[element])) return false;
      continue;
    }
    if (typeof object1[element] === 'object' && !Array.isArray(object1[element])) {
      return eqObjects(object1[element], object2[element]);
    }
    if (object1[element] !== object2[element]) return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false