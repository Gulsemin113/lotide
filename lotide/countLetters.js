// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters= function (string) {
  let result = {};
  for (const letter of string.split('')) {
    result[letter] = 0;
    //console.log (result);
  }
  for (const key in result) {
    for (const letter of string.split('')) {
      if (key === letter) {
        result[key]++;
      }
    }
  }
  return result;
}

console.log(countLetters('countletters'));