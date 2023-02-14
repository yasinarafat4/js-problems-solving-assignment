/* Problem 5: Convert your gems into diamond

তোমাকে একটা function দেওয়া হবে called “gemsToDiamond()”. এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে। 

Sample Input & Output:-

Input: 1, 1, 1
Output: 96

Input: 20, 200, 50
Output: 6970

Input: 100, 5, 1
Output: 303
*/

/* Notes

3 jon fnd er kache bivinno doroner gems ache, seguloke ami diamond e rupantor korbo, 
 
input parameter hisebe 3 ta sonkha nite hobe, 

1st fnd er joto gem ache setare 21 diye gun korbo, 2nd fnd er gem ke 32, and 3rd fnd er gem ke 43 diye gun korbo, 

ebar sob gula gunfol ke jog kore total ber korbo, sei total jogfol ta jodi 1 hajar er 2 gun er cheye soman ba besi (mane 2000 er cheye soman ba besi) hoy tahole setar sathe 2000 minus kore sei result ta return korbo.

ar jodi ei tatal ta 1 hajar er 2 gun er cheye kom (mane 2000 er cheye kom) hoy tahole ja ase setake return kore dibo.

*/
// converting the total gems of 3 friends to diamonds through the function.
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
  if (typeof firstFriendGems != "number") {
    return "Please provide all valid numbers";
  } else if (typeof secondFriendGems !== "number") {
    return "Please provide all valid numbers";
  } else if (typeof thirdFriendGems !== "number") {
    return "Please provide all valid numbers";
  }

  let gemsCountOne = firstFriendGems * 21;
  let gemsCountTwo = secondFriendGems * 32;
  let gemsCountThree = thirdFriendGems * 43;

  let totalDiamond = gemsCountOne + gemsCountTwo + gemsCountThree;

  if (totalDiamond >= 2000) {
    let minus = totalDiamond - 2000;
    return minus;
  } else {
    return totalDiamond;
  }
}
let result = gemsToDiamond(100, 5, 1);
console.log(result);
