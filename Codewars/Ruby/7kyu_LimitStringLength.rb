=begin

The function must return the truncated version of the given string up to the given limit followed by "..." if the result is shorter than the original. Return the same string if nothing was truncated.

Example:

solution('Testing String', 3) --> 'Tes...'
solution('Testing String', 8) --> 'Testing ...'
solution('Test', 8)           --> 'Test'

=end

def solution(st, limit)
  if limit >= st.length
    st[0...limit]
  else
    st[0...limit] + "..."
  end
end
