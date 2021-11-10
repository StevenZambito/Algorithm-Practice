=begin

Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

ordered_count("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

=end

def ordered_count(str)
  letters = str.split("")
  hash = Hash.new
  
  
  for l in letters
    if hash[l]
      hash[l] += 1
    else
      hash[l] = 1
    end
  end
  
  answer_array = []
  
  hash.each do |key, value|
    answer_array.push([key, value])
  end
  
  answer_array
end
