
const eqArrays = require('./eqArrays');

function assertEqualArray(array1, array2){
  result = eqArrays(array1,array2);
   if(!result){
     console.log("Oh! Sorry! The arrays are not equal");
   }
   else{
     console.log("Congratulations! The arrays are equal");
   }
}



module.exports = assertEqualArray;