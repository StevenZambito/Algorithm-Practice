/* Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1] */

const reverseSeq = n => {
  let reversedArr = []
  for (let i = 1; i <= n; i++) {
    reversedArr.push(i)
  }
  return reversedArr.reverse()
};
