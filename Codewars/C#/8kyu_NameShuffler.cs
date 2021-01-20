/* Write a function that returns a string in which firstname is swapped with last name.

Kata.NameShuffler("john McClane") => "McClane john" */

using System;

public class Kata
{   
  public static string NameShuffler(string str)
  {
    var newString = str.Split();
    var firstWord = newString[1];
    var secondWord = newString[0];
    var answer = firstWord + " " + secondWord;
    return answer;
  }
}
