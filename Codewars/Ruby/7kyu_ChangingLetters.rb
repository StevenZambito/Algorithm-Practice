# When provided with a String, capitalize all vowels

# For example:

# Input : "Hello World!"

# Output : "HEllO WOrld!"

# Note: Y is not a vowel in this kata.

def swap(st)
  st.gsub(/[aeiou]/, "a"=>"A", "e"=>"E", "i"=>"I", "o"=>"O", "u"=>"U")
end
