// write a function countLetter of a string
// return an object
// loop through the characters and count them
// not counting spaces

var output = {};

function countLetters(word) {

  var arr = word.split('');

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] !== ' ') {

      var letter = arr[i];

      if (output[letter]) {

        output[letter] ++; //counter

      } else {
        output[letter] = 1;

      }
    }

  }
  return output;
}

console.log(countLetters('lighthouse in the house'));