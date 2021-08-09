/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

var greet = function(name) {
  let loweredName = name.toLowerCase()
  let capitalName = loweredName[0].toUpperCase() + loweredName.slice(1)
  return `Hello ${capitalName}!`;
};
