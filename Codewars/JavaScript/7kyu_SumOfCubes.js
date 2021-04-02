/* Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples:

sumCubes(2) // 9
// sum of the cubes of 1 and 2 is 1 + 8 */

function sumCubes(n){
  let newArray = []
  
  for(let i = 1; i <= n; i++) {
    newArray.push(i)
  }
  
  return newArray.map(x => Math.pow(x, 3)).reduce((a, b) => a + b);
}
