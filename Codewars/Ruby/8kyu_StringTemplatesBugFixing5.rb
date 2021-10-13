=begin
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his 
string template so it works as he expects.
=end

def build_string(*args)
  whatILike = args.join(", ")
  "I like #{whatILike}!"
end
