/* Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
Digits.Explode("312") = "333122"
Digits.Explode("102269") = "12222666666999999999" */

using System;
using System.Linq;

public class Digits
{
  public static string Explode(string s)
  {
    var answer = "";
    for (var i = 0; i < s.Length; i++)
    {
      var num = int.Parse(s[i].ToString());
      for (var j = 0; j < num; j++)
      {
          answer += s[i];
      }
    }
    return answer;
  }
}
