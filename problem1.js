/* Problem 1: Let’s play a mind game

তোমাকে একটা function দেওয়া হবে called “mindGame()” যা ইনপুট হিসেবে একটা positive number নিবে। 

এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে। 

Sample Input & Output:-

Input: 5
Output: 7.5

Input: 50
Output: 75

Input: 33
Output: 49.5
*/

/* Notes

>> 1 number as input then multiply by 3, 
then result + 10, then result / 2, then - 5, 

and return final result.


*/

// Doing basic operations (addition, subtraction, multiplication, division) of the positive number that is given as input.
function mindGame(positiveNumber) {
  if (typeof positiveNumber != "number") {
    return "Please provide a valid number";
  }
  let multiplication = 3;
  let addition = 10;
  let division = 2;
  let subtraction = 5;
  let remaining = 0;

  remaining = positiveNumber * multiplication;
  let sum = remaining + addition;
  let divided = sum / division;
  output = divided - subtraction;
  return output;
}
let result = mindGame(33);
console.log(result);
