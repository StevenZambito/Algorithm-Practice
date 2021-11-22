=begin

You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written 
out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"

=end

N = {
  'zero'  => 0,
  'one'   => 1,
  'two'   => 2,
  'three' => 3,
  'four'  => 4,
  'five'  => 5,
  'six'   => 6,
  'seven' => 7,
  'eight' => 8,
  'nine'  => 9  
}

def average_string(s)
  wds = s.split
  return 'n/a' if wds.empty? || wds.any?{ |wd| !N.has_key?(wd) }
  avg = wds.map{|wd| N[wd]}.reduce(:+) / wds.size
  N.invert[avg]
end
