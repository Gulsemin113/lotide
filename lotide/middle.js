
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

// ACTUAL FUNCTION
const middle = function(arrayInput) {
  let num = 0;
  if (arrayInput.length <= 2) {
    return [];
  } else {
    num = Math.floor(arrayInput.length / 2);
    if (arrayInput.length % 2 === 0) {
      return [arrayInput[num - 1],arrayInput[num]];
    } else {
      return [arrayInput[num]];
    }
  }
};

console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6]));

assertEqualArray(middle([1,2,3]),[2]);
assertEqualArray(middle([1,2,3,4]),[2,3]);
assertEqualArray(middle([1,2,3,4,5]),[3]);