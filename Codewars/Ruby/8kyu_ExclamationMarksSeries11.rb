=begin
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
=end

def replace(s)
  if s.scan(/[aeiouAEIOU]/).count >= 1
    s.gsub!(/[aeiouAEIOU]/, "!")
  else
    s
  end
end
