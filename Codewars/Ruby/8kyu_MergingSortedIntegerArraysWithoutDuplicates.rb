=begin
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not 
have any duplicate.
=end

def merge_arrays(a, b)
  (a + b).sort.uniq
end
