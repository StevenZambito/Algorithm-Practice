/* Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

function bmi(weight, height) {
  if((weight/(height * height)) <= 18.5) {
    return "Underweight"
  } else if((weight/(height * height)) <= 25.0) {
    return "Normal"
  } else if((weight/(height * height)) <= 30.0) {
    return "Overweight"
  } else if((weight/(height * height)) > 30) {
    return "Obese"
  }
}
