
function tail(array) {
  let tailed = [];
  for (i = 1; i < array.length; i++) {
    tailed [i - 1] = array [i];

  }
  return tailed;
}
console.log(tail([5,6,7]));

module.exports = tail;