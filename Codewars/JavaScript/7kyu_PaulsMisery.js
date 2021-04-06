/* Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a 
normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1

The Misery Score is the total points gained from the array. Once you have the total, return as follows:

<40 = 'Super happy!'
<70 >=40 = 'Happy!'
<100 >=70 = 'Sad!'
=100 = 'Miserable!' */

function paul(x){
let counter = 0;
  
for (let i = 0; i < x.length; i++) {
  if (x[i] === 'life') {
    counter = counter + 0;
  } else if (x[i] === 'eating') {
    counter = counter + 1;
  } else if (x[i] === 'kata') {
    counter = counter + 5;
  } else if (x[i] === 'Petes kata') {
    counter = counter + 10;
  }
 }
  
  if (counter < 40) {
    return 'Super happy!'
  } else if (counter < 70 && counter >= 40) {
    return 'Happy!'
  } else if (counter < 100 && counter >=70) {
    return 'Sad!'
  } else {
    return 'Miserable!'}
}

