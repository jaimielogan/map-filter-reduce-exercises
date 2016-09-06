function multiplyBy10(array) {
 // your code here
  return array.map(function(values){
    return values * 10;
  });
}

function shiftRight (array) {
 // your code here
 return array.concat(array.splice(0,array.length-1));
}

// OR
//
// function shiftRight (array){
//   return array.unshift(array.pop());
// }

function onlyVowels(array){
  var vowels = [];
  return array.map(function(item){
    for (var i = 0; i < item.length; i++) {
      if(/[aeiou]/.test(item[i])){
        vowels.push(item[i]);
      }
    }
    return vowels;
  });
}

function doubleMatrix (array) {
 // your code here
 return array.map(function(innerarray){
 	return innerarray.map(function(element){
 		return element * 2;
 	});
 });
}

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
