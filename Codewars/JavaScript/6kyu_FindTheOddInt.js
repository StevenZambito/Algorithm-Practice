/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  var count = 0;
  for(var i = 0; i<A.length; i++){
    for(var j = 0; j<A.length; j++){
      if(A[i] == A[j]){
        count++;
      }
    }
    if(count % 2 != 0 ){
      return A[i];
    }
  }
}
