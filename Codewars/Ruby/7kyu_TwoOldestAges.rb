=begin

The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within 
the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return 
both of them in array format.

For example:

two_oldest_ages([1, 3, 10, 0]) # should return [3, 10]

=end

def two_oldest_ages(ages)
  oldest = ages.max
  the_index = ages.find_index(oldest)
  ages.delete_at(the_index)
  second_oldest = ages.max
  
  [second_oldest, oldest]
end
