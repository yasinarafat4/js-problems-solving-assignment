/* Problem 2: Finding even or odd

তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 

এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

Sample Input & Output:-

Input: ‘Phero’
Output: odd

Input: ‘Batch7’
Output: even

Input: ‘chatgpt’
Output: odd
*/

/* Notes

input string- like name
if the name's number is even (joor) then return 'even' or the name's number is odd (bijoor) then return 'odd'

count korte hobe
*/

// Finding the output 'even' or 'odd' based on the total character of the string.
function evenOdd(str) {
  if (typeof str != "string") {
    return "Please provide a valid string";
  }
  let string = str.length;
  if (string % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
let myGivenName = evenOdd("Phero");
console.log(myGivenName);
