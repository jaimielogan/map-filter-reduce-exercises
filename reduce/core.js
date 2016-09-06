function sum (array) {
  // your code here
  return array.reduce(function(previous,current){
    return previous + current;
  });
}

function productAll (array) {
  // your code here
  return array.reduce(function(previous,current){
    return previous * current;
  });
}

function objectify (array) {
  // your code here
}

function luckyNumbers (array) {
  // your code here
}

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
