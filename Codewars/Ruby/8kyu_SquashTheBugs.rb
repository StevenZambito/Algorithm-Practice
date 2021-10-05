=begin
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. 
Output should be the length of the longest word, as a number.
=end

def find_longest(string)
    string.split(" ").sort {|a_word, b_word| b_word.length <=> a_word.length}[0].length
end
