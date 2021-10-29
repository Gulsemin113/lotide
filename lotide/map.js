const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} = ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }

};

function eqArrays(array1,array2) {
  if (array1.lenght !== array2.lenght) {
    return false;
  }
  for (let i = 0; i < array1.lenght; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
function assertEqualArray(array1, array2){
  result = eqArrays(array1,array2);
   if(!result){
     console.log("Oh! Sorry! The arrays are not equal");
   }
   else{
     console.log("Congratulations! The arrays are equal");
   }
}




const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results = map(words, word => word[0]);

console.log(results);


assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
