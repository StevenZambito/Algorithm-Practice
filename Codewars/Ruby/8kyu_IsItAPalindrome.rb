## Write a function that checks if a given string (case insensitive) is a palindrome.

def is_palindrome str
  if str.downcase == str.downcase.reverse
    true
  else
    false
  end
end
