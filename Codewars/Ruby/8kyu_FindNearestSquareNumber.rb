=begin
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)

Check my other katas:

Alphabetically ordered

Case-sensitive!

Not prime numbers
=end

def nearest_sq(n)
  Math.sqrt(n).round ** 2
end
