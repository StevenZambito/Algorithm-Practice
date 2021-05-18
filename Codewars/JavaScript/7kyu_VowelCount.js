/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
  let vowelsCount = 0;
  let answerArray = [];

  for(let i = 0; i < str.length; i++) {
    answerArray.push(str[i])
      }
  
  for(let i = 0; i < answerArray.length; i++) {
    if (answerArray[i] === 'a') {
    vowelsCount++
    } else if(answerArray[i] === 'e') {
    vowelsCount++
    } else if(answerArray[i] === 'i') {
    vowelsCount++
    } else if(answerArray[i] === 'o') {
    vowelsCount++
    } else if(answerArray[i] === 'u') {
    vowelsCount++
    }
  }
  return vowelsCount;
}

