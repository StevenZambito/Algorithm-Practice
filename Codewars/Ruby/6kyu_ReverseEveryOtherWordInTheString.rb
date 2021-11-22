=begin

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly
one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

=end

def reverse_alternate(string)
  string.split.map.with_index{|w,i| i.odd? ? w.reverse : w}.join(' ')
end
