/* Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i if non of the above conditions are true.

 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]

Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

 

Constraints:

    1 <= n <= 104
*/

var fizzBuzz = function(n) {
    let array = []
    let newArray = []
    for(let i = 1; i <= n; i++) {
        array.push(i)
}
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 3 === 0 && array[i] % 5 === 0) {
            newArray.push('FizzBuzz')
        } else if(array[i] % 3 === 0) {
            newArray.push('Fizz')
        } else if(array[i] % 5 === 0) {
            newArray.push('Buzz')
        } else {
            newArray.push(array[i].toString())
        }
    }
    return newArray;
};
