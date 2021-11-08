=begin

Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.

=end

def round_to_next_5(n)
  return n if n % 5 == 0
  rounded = n.round(-1)
  rounded > n ? rounded : rounded + 5
end

