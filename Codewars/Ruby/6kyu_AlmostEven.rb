=begin

We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. The sum of the parts should 
be the original value, but each part should be an integer, and they should be as close as possible.

Example code:

splitInteger(20, 6)   # returns [3, 3, 3, 3, 4, 4]
Complete the function so that it returns an array of integer representing the parts. Ignoring the order of the parts, there is only one valid solution 
for each input to your function!

(Also, there is no reason to test for edge cases: the input to your function will always be valid for this kata.)

=end

def splitInteger(num,parts)
  div = num / parts
  rem = num % parts
  [div+1] * rem + [div] * (parts - rem)
end
