/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/

function narcissistic(value) {
   let m = 1, count = 0;
   while(value / m > 1){
      m *= 10;
      count++;
   };
   let sum = 0, temp = value;
   while(temp){
      sum += Math.pow(temp % 10, count);
      temp = Math.floor(temp / 10);
   };
   return sum === value;
}
