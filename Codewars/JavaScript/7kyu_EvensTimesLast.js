/* Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0. */


function evenLast(numbers) {
if (numbers.length > 1) {
  return numbers.filter((x,  i) => i % 2 === 0).reduce((a, b) => a + b, 0) * numbers[numbers.length - 1]
  } else {
  return 0;
  }
}
