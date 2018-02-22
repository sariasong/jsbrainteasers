
//Palindrome//
function palindrome(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse(); 
  var joinArray = reverseArray.join("");
  // return joinArray; 
  if (str == joinArray) {
      return true; 
  } else {
    return false; 
  }
}

console.log(palindrome('racecar'));

//Alphabetize Function//
var sortAlphabets = function(text) {
  return text.split('').sort().join('');
};
console.log(sortAlphabet('drpoklj')); 

//Combos of Strings//
function combinator (s) {
  list_of_strings = new Array();
  for(i=0;i<s.length;i++) {
      for(j=i+1;j<s.length+1;j++) {
          list_of_strings.push(s.slice(i, j));
      }
  }
  return list_of_strings;
}

console.log(combinator("dog"));

//Uppercase Function//

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

//Longest Word Function//

function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//Vowel Count//

function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

console.log(getVowels("the quick brown fox jumped over the lazy dog"));