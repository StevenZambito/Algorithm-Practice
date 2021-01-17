/* Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"
If either input is an empty string, consider it as zero. */

function sumStr(a,b) {
  if (a && b) {
    return (parseInt(a) + parseInt(b)).toString()
  } else if(a === "" && b === "") {
    return '0'
  } else if(a === "") {
    return parseInt(b).toString()
  } else if(b === "") {
    return parseInt(a).toString()
  }
}
