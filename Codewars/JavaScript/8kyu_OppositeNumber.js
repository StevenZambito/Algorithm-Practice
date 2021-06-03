/* Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34 */

function opposite(number) {
  if (number * 1 === -number) {
    return number;
  } else {
    return -number;
  }
}

