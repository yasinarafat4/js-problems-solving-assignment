// Description: Doing basic operations (addition, subtraction, multiplication, division) of the positive number that is given as input.
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

// Description: Finding the output 'even' or 'odd' based on the total character of the string.
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

// Description: Finding the absolute difference between the input value and 7.
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

// Description: Finding the 'bad data' from the array that has been taken as input and returns that number.
function findingBadData(ageNumbers) {
  if (typeof ageNumbers != "object") {
    return "Please provide a valid array";
  }
  let badDataCount = 0;
  ageNumbers.forEach((item) => {
    if (item < 0) {
      badDataCount++;
    }
  });
  return badDataCount;
}

// Description: converting the total gems of 3 friends to diamonds.
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
