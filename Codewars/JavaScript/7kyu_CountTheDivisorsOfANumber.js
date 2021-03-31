/* Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples

divisors(4)  = 3  // 1, 2, 4
divisors(5)  = 2  // 1, 5
divisors(12) = 6  // 1, 2, 3, 4, 6, 12
divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30 */

function getDivisorsCnt(n){
let lowEnd = 1;
let highEnd = n;
let arr = [];
let counter = 0;

while(lowEnd <= highEnd){
   arr.push(lowEnd++);
}
  
for(let i = 0; i < arr.length; i++) {
  if(n / arr[i] % 1 ===  0) {
    counter++
  }
}
  return counter;
}
