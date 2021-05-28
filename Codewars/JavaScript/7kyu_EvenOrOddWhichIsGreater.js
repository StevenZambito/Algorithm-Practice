/* Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the 
indiviudal odd digits. Always a string of numbers will be given.

    If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

    If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

    If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
  let even = []
  let odd = []
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      even.push(parseInt(str[i]))
    } else {
      odd.push(parseInt(str[i]))
    }
  }
  
  let evenSum = even.reduce((a, b) => a + b, 0)
  let oddSum = odd.reduce((a, b) => a + b, 0)
  
  if(evenSum > oddSum) {
    return 'Even is greater than Odd'
  } else if(oddSum > evenSum) {
    return 'Odd is greater than Even'
  } else {
    return 'Even and Odd are the same'
  }
}
