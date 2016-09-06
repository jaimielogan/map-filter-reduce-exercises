function onlyEven (array) {
  // your code here
  return array.filter(function(element){
    return element % 2 === 0;
  });
}

function onlyOneWord (array) {
  // your code here
  return array.filter(function(element){
    if(element.indexOf(' ') < 0){
      return element;
    }
  });
}

function positiveRowsOnly (array) {
  // your code here
  return array.filter(function(innerarray){
    return innerarray.filter(function(element){
      if(element > 0){
        return element;
      }
    });
  });
}

function allSameVowels (array) {
  // your code here
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
