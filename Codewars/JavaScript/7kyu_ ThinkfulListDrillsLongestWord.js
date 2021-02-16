/* Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7

Do not modify the input list. */

function longest(words) {
  let longestWord = ''
  
  for(let i = 0; i < words.length; i++) {
    if(words[i].length > longestWord.length) {
      longestWord = words[i]
    }
  }
  return longestWord.length;
}
