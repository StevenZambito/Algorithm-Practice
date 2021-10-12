=begin
Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for 
none of the items in the array. An empty list should return true.

Ruby: If you need help, here is a reference:
=end

def none? list, &block
  list.none?(&block)
end
