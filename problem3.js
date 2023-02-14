/* Problem 3: Is Less or Greater than seven

তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে absolute পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই ইনপুট এবং ৭ এর মধ্যে পার্থক্য। নাহলে তোমাকে return করতে হবে double of their absolute difference.

Sample Input & Output:-

Input: 6
Output: -1

Input: -15
Output: -22

Input: 15
Output: 30
*/

/* Notes

input hisebe number nibo, setar sathe 7 minus korbo, minus er result jodi 7 er theke kom hoy tahole otake return kore dibo, r result jodi 7 er theke besi hoy tahole je input nichi setake 2 gun kore return korbo.

*/

// Finding the absolute difference between the input value and 7.
function isLGSeven(number) {
  if (typeof number != "number") {
    return "Please provide a valid number";
  }
  let subtractOfNumber = number - 7;
  if (subtractOfNumber < 7) {
    return subtractOfNumber;
  } else if (subtractOfNumber > 7) {
    let multiply = number * 2;
    return multiply;
  }
}
let result = isLGSeven(15);
console.log(result);
