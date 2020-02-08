// Q1: Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out,
// because 92 is 81 and 12 is 1.

function squareDigits(num) {
  //may the code be with you
  let digits = num.toString().split("");
  let result = "";
  for (let number of digits) {
    result += number * number;
  }
  return parseInt(result, 10);
}

/**
 * Q2: Create a function that returns the sum of the two lowest positive numbers
 * given an array of minimum 4 positive integers. No floats or non-positive
 * integers will be passed. For example, when an array is passed like
 * [19, 5, 42, 2, 77], the output should be 7.
 * [10, 343445353, 3453445, 3453545353453] should return 3453455.
 */

function sumTwoSmallestNumbers(numbers) {
  //Code here
  let sortNumbers = numbers.sort((a, b) => a - b);
  return sortNumbers[0] + sortNumbers[1];
}

/**
 * Q3: Even or Odd
 * Create a function (or write a script in Shell) that takes an integer
 * as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */
function even_or_odd(number) {
  // ...
  return number % 2 ? "Odd" : "Even";
}

/**
 * Q5: Opposite number
 * Very simple, given a number, find its opposite.
 */
function opposite(number) {
  //your code here
  return number * -1;
}

/**
 * Q6: Sum of positive
 * You get an array of numbers, return the sum of all of the positives ones.
 * Example [1,-4,7,12] => 1 + 7 + 12 = 20
 * Note: if there is nothing to sum, the sum is default to 0.
 */
function positiveSum(arr) {
  let result = 0;
  for (let number of arr) {
    if (number > 0) {
      result += number;
    }
  }
  return result;
}

/**
 * Q7: Find the smallest integer in the array
 * Given an array of integers your solution should find the smallest integer.
 * For example: Given [34, 15, 88, 2] your solution will return 2
 * Given [34, -345, -1, 100] your solution will return -345
 * You can assume, for the purpose of this kata, that the supplied
 * array will not be empty.
 */
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

/**
 * Q8: String repeat
 * Write a function called repeatString which repeats the given String
 * src exactly count times.
 * repeatStr(6, "I") // "IIIIII"
 * repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 */
function repeatStr(n, s) {
  return s.repeat(n);
}

/**
 * Q9: Return Negative
 * In this simple assignment you are given a number and have to make it negative.
 * But maybe the number is already negative?
 * makeNegative(1); // return -1
 */
function makeNegative(num) {
  // Code?
  return num <= 0 ? num : -num;
}

/**
 * Q10: Remove First and Last Character
 * It's pretty straightforward. Your goal is to create a function that
 * removes the first and last characters of a string. You're given one parameter,
 * the original string. You don't have to worry with strings with
 * less than two characters.
 */
function removeChar(str) {
  //You got this!
  let result = str.split("");
  result.pop();
  result.shift();
  return result.join("");
}
function removeChar2(str) {
  return str.slice(1, -1);
}

/**
 * Q11: Remove String Spaces
 * Simple, remove the spaces from the string, then return the resultant string.
 */
function noSpace(x) {
  return x.split(" ").join("");
}

/**
 * Q12: Convert boolean values to strings 'Yes' or 'No'.
 */
function boolToWord(bool) {
  //...
  return bool ? "Yes" : "No";
}

/**
 * Q13: Convert a Number to a String!
 */
function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

/**
 * Q14: Counting sheep...
 * Consider an array/list of sheep where some sheep may be missing from
 * their place. We need a function that counts the number of sheep present
 * in the array (true means present).
 */
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.filter(a => a === true).length;
}

/**
 * Q15: Reversed Strings
 */
function solution(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

/**
 * Q16: Grasshopper - Summation
 * Write a program that finds the summation of every number from 1 to num.
 * The number will always be a positive integer greater than 0.
 */
var summation = function(num) {
  // Code here
  return ((1 + num) * num) / 2;
};

/**
 * Q17: Basic Mathematical Operations
 * Your task is to create a function that does four basic mathematical operations.
 * The function should take three arguments - operation(string/char),
 * value1(number), value2(number).The function should return result of
 * numbers after applying the chosen operation.
 */
function basicOp(operation, value1, value2) {
  // Code
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

/**
 * Q18: Square(n) Sum
 * Complete the square sum function so that it squares each number passed
 * into it and then sums the results together.
 */
function squareSum(numbers) {
  let result = 0;
  for (let i of numbers) {
    result += i * i;
  }
  return result;
  // return numbers.reduce((sum,num) => sum + (num * num), 0);
}
