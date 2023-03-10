# Having two standards for a keypad layout is inconvenient!
# Computer keypad's layout:
# 7 8 9  
# 4 5 6  
# 1 2 3 
#   0 

# Cell phone keypad's layout:
# 1 2 3
# 4 5 6 
# 7 8 9 
#   0

# Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

# Example:
# "789" -> "123"

# Notes:
# You get a string with numbers only

def computer_to_phone(numbers)
  numbers.gsub(/[123789]/, "1"=>"7", "2"=>"8", "3"=>"9", "7"=>"1", "8"=>"2", "9"=>"3")
end
