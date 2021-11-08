=begin

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

=end

def sum_digits(number)
  numberArray = number.to_s.chars.map(&:to_i)
  newArray = numberArray.each { |num| 
    if num.negative?
      num * -1
    else
      num * 1
    end
  }
  newArray.sum
end
