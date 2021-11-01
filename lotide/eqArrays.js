
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


module.exports = eqArrays;