=begin

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity

=end

def capitalize(s)
  even = s.chars.map.with_index { |char, index|
    if index.odd?
      char.downcase
    else
      char.upcase
    end
  }.join("")
  
  odd = s.chars.map.with_index { |char, index|
    if index.even?
      char.downcase
    else
      char.upcase
    end
  }.join("")
  
  [even, odd]
end
