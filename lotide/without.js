// FUNCTION IMPLEMENTATION
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

function without(source, differentValues) {
  for (let i = 0; i < source.length; i++) {
        
    for  (let j = 0; j < differentValues.length; j++) {

      if (source[i] === differentValues[j]) {

        source.splice(i,1);
        console.log(source);
      }
    }
  }
  return source;
  
}


assertEqualArray((without([1, 2, 3], [1])), [2, 3]);
 

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqualArray(words, ["hello", "world", "lighthouse"]);
