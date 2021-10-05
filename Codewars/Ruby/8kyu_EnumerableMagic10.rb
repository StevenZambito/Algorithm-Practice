=begin
Create a method max that accepts a list and a block, and returns the item that is the maximum using the block as the comparator.
=end

def max list, &block
  list.max(&block)
end
