/* Problem 4: Finding Bad data

তোমাকে একটা function দেওয়া হবে called “findingBadData()”. এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 


এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

Sample Input & Output:-

Input: [ 1,2,5 ]
Output: 0

Input: [ 2, -5, -7, -13 ]
Output: 3

Input: [ -4, -9, -5, -33, -55 ]
Output: 5
*/

/* Notes

input hisebe array ke nibo(array of ageNumbers)
koyta bad data(negetive) seta count korte hobe.
resul hesebe return korbo kotogula boys negetive diche (0 er theke choto).


*/
// Finding the 'bad data' from the array that has been taken as input and returns that number.
function findingBadData(ageNumbers) {
  if (typeof ageNumbers != "object") {
    return "Please provide a valid array";
  }
  //Solution One
  let badDataCount = 0;

  for (let i = 0; i < ageNumbers.length; i++) {
    if (ageNumbers[i] < 0) {
      badDataCount++;
    }
  }
  return badDataCount;

  // Solution Two
  ageNumbers.forEach((item) => {
    if (item < 0) {
      badDataCount++;
    }
  });
  return badDataCount;
}

let result = findingBadData([-4, -9, -5, -33, -55, -6]);
console.log(result);
