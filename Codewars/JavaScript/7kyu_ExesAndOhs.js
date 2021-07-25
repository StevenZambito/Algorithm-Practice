/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let theString = str.toLowerCase()
    let string = theString.split("")
    let xCounter = 0
    let oCounter = 0
    for(let i = 0; i < string.length; i++) {
      if(string[i] === 'x') {
        xCounter++
      } else if(string[i] === 'o') {
        oCounter++
      }
    }
  if(xCounter === oCounter) {
    return true
  } else {
    return false
  }
}
