// Return char indexes
// Create an object
// Loop though the string



// OUTPUT
// var obj = {
//  letterO = [6, 16],
//  letterl = [1],
//  ...
// }

function countLetters(word) {
  var obj = {};
  var letters = word.split('');

  letters.forEach(function(elm, index) { // for each element in "Letters" array
    // console.lo g('*********', index);
    if (elm !== ' ') {// if the "elm" is not a space
      var char = elm; // element is a letter

      if (obj[char]) { //if there is a letter in object
        obj[char].push(index);

      } else {
        obj[char] = [index];
      }

    }
  })
  return obj;
}

console.log(countLetters('lighthouse in the house'));
