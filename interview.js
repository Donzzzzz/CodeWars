// Q1: Reverse String
function reverse(str) {
  // console.log(str[4]);
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Not a valid input!";
  }
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
  //   return str
  //     .split("")
  //     .reverse()
  //     .join(" ");
}

// console.log(reverse("addwww"));

// Q2: Merge Sorted Array
const mergeSortedArrays = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);

// Q3: Implemented Hash Table
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(string, number) {
    let address = this._hash(string);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([string, number]);
    return this.data;
  }
  get(string) {
    let address = this._hash(string);
    const bucket = this.data[address];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === string) {
          return bucket[i][1];
        }
      }
    }
    return undefined;
  }
}
const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9);
myHashTable.get("apples");

// Q4: 长度为n的数组，数字在0 ~ n-1之间， 找出任意重复的数字。
// First method: sorted.   Time: O(nlogn) Space:O(1)
// Second: hash map.       Time: O(n) Space:O(n)
// Third: change position. Time: O(n) Space:O(1)
const findSameNum1 = array => {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      return array[i];
    }
  }
  return "Not Found";
};

// console.log(findSameNum1([2, 3, 1, 0, 1]));

const findSameNum2 = array => {
  let result = {};
  for (let number of array) {
    if (result[number]) {
      return number;
    } else {
      result[number] = 1;
    }
  }
  return "Not Found";
};

// console.log(findSameNum2([2, 3, 1, 0, 1]));

const findSameNum3 = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) {
      continue;
    }
    if (array[array[i]] === array[i]) {
      return array[i];
    } else {
      let temp = array[i];
      array[i] = array[array[i]];
      array[temp] = temp;
      i--;
    }
  }
  return "Not found";
};

// console.log(findSameNum3([2, 3, 1, 0, 1]));

// Q1: Find min and max number in a mixed type array.
const arr = [10, "abc", 40, true, { name: "Peter" }, 25, 1000, 1];

const newArray = arr.filter(item => typeof item === "number");
// console.log(`MAX, ${Math.max(...newArray)}`);
// console.log(`MIN, ${Math.min(...newArray)}`);

// Q2: Find highest occurence character in a string.
const string = "abcabc";
const string2 = "aabbccdefg";

const findMaxOccurency = string => {
  let obj = {};
  for (let letter of string) {
    obj[letter] ? obj[letter]++ : (obj[letter] = 1);
  }
  let maxLetter = {};
  let maxNumber = 0;
  for (let eachLetter in obj) {
    let eachNumber = obj[eachLetter];
    if (eachNumber >= maxNumber) {
      maxNumber = eachNumber;
    }
  }
  for (let eachLetter in obj) {
    if (obj[eachLetter] === maxNumber) {
      maxLetter[eachLetter] = maxNumber;
    }
  }
  return maxLetter;
};

// console.log(findMaxOccurency(string2));

// Q3: Remove duplicate items in a mixed type array.
const arr2 = [10, "abc", 40, true, { name: "Peter" }, 25, true, 1000, 10, 1];
// console.log(...new Set(arr2));

// Q4: Simple max difference: Given an array return the max difference nums[j] - nums[i]
// for pairs nums[i] <= nums[j] where i < j. (I wasted a lot of time on this problem for
// some dumb incorrect if statement, think through your solution before solving this should
// be a quick 10 min problem)
// * Ex. 7,2,3,10,1 the return value would be 10-2 and not 10-1 because 1 comes after the 10.
const maxProfit = prices => {
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j] && i < j && prices[j] - prices[i] > result) {
        result = prices[j] - prices[i];
      }
    }
  }
  return result;
};

// console.log(maxProfit([7,1,5,3,6,4]));

// Keep track of the lowest number as you iterate through the array and
// keep track of highest profit which would be current number - lowest number
// kept track of and finding the max of it.
// This solution has time space complexity of O(N) time and O(1) space.

const maxProfit2 = prices => {
  let ans = 0;
  let curLowest = prices[0];
  for (let i = 1; i < prices.length; i++) {
    curLowest = Math.min(curLowest, prices[i]);
    ans = Math.max(prices[i] - curLowest, ans);
  }
  return ans;
};

// console.log(maxProfit2([7,2,6,1,4]));

// Q5: A beautiful subarray is defined as an array of length having a specific number of odd elements.
// Given an array of integers and a number of odd elements that constitutes beauty,
// create as many distinct beautiful subarrays as possible. Distinct means the arrys
// dont share identical starting and ending indices, though they may share one of the two.
/*
For example, given the array [1,2,3,4,5] and a beautiful number 2, 
the following beautiful subarrays can be formed.
[1,2,3]
[1,2,3,4]
[2,3,4,5]
[3,4,5]
output: 4

More Example
[2,5,4,9] , 2

subarrays
[5,4,9]
[2,5,4,9]
output:2
*/

/**
 * Q6: the-power-sum (Recursion)
 * Find the number of ways that a given integer X,
 * can be expressed as the sum of the N powers of unique, natural numbers.
 * Input: 13 2 Output: 1 (2^2 +3^2)
 */

function foo(current, candidateArray, N) {
  if (current === 0) {
    return 1;
  }
  if (candidateArray.length === 0) {
    return 0;
  }
  if (current < 0) {
    return 0;
  }
  return (
    foo(current, candidateArray.slice(1), N) +
    foo(current - Math.pow(candidateArray[0], N), candidateArray.slice(1), N)
  );
}

function powerSum(X, N) {
  let result = [];
  const maxNumber = Math.floor(Math.sqrt(X));
  for (let i = 1; i <= maxNumber; i++) {
    result.push(i);
  }
  return foo(X, result, N);
}
// console.log(powerSum(100, 2));

/**
 * Q7: The coin change problem (DP)
 * you have different types of coins available to you in infinite quantities.
 * The value of each coin is already given. Can you determine the number of ways of
 * making change for a particular number of units using the given types of coins?
 * Input: 3 [8,3,1,2] Output: 3
 * For example, if you have 4 types of coins, and the value of each type is given as
 * 8, 3, 1, 2 respectively, you can make change for 3 units in three ways: [1,1,1], [1,2] and [3].
 */

/**
 * Q8: Google Question - Fisrt Recurring Character
 * Given an array = [2,5,1,2,3,5,1,2,4]: It should return 2
 * Given an array = [2,1,1,2,3,5,1,2,4]: It should return 1
 * Given an array = [2,3,4,5]: It should return undefined
 */
const firstRecurringCharacter = input => {
  const result = {};
  for (let value of input) {
    if (result[value]) {
      return value;
    }
    result[value] = 1;
  }
  return undefined;
};

// console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));

/**
 * Q9: Counting Bits
 * Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num
 * calculate the number of 1's in their binary representation and return them as an array.
 */

const countingBits = num => {
  let result = [];
  for (let i = 0; i <= num; i++) {
    result.push((i.toString(2).match(/1/g) || []).length);
  }
  return result;
};

// console.log(countingBits(5));

/**
 * Q10: remove duplicate
 */
const uniqBy = (arr, key) => {
  return [...new Map(arr.map(item => [item[key], item])).values()];
};

const singers = [
  { id: 1, name: "Leslie Cheung" },
  { id: 1, name: "Leslie Cheung" },
  { id: 2, name: "Eason Chan" }
];
// console.log(uniqBy(singers, 'id'));

//  [
//    { id: 1, name: 'Leslie Cheung' },
//    { id: 2, name: 'Eason Chan' },
//  ]

// Leetcode 136: Single Number
// Idea: Using a dict to find it, or using XOR to find the single number, or using 2(a + b) - (a + b + b).
const nums3 = [1, 2, 2, 5, 4, 4, 5];

const singleNumber = nums => {
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp ^= nums[i];
  }
  return temp;
};

const singleNumber2 = nums => {
  return (
    2 * [...new Set(nums)].reduce((a, b) => a + b, 0) -
    nums.reduce((a, b) => a + b, 0)
  );
};

const singleNumber3 = nums => {
  let dict = {};
  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]]) {
      dict[nums[i]] += 1;
    } else {
      dict[nums[i]] = 1;
    }
  }
  for (let j in dict) {
    if (dict[j] === 1) {
      return j;
    }
  }
};

// console.log(singleNumber3(nums3));

// Leetcode 202: Happy Number
// Using while n != 1, if n === 1; it is happy number, using a temp to store the sum, if the sum appearing twice, return false.
// Or using two-pointer to find the cycle.
let n = 432;

const isHappy = n => {
  let temp = [];
  while (n != 1) {
    let sum = 0;
    while (n) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    n = sum;
    // console.log('n: ', n);
    if (temp.includes(n)) {
      return false;
    }
    temp.push(n);
    // console.log(temp);
  }
  return true;
};
// console.log(isHappy(n));

// Leetcode 53: Maximum Subarray
// Compare the first day and (the second day + first day) value, choose the larger one, if the sum is negative and the next day is
// positive, skip it. If the input is [-2, 1, -3, 4, -1, 2, 1, -5, 4], we can get an array like [-2, 1, -2, 4, 3, 5, 6, 1, 5].
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubArray = nums => {
  let max = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max + nums[i], nums[i]);
    result = Math.max(result, max);
  }
  return result;
};

// console.log(maxSubArray(nums));

// Leetcode 283: Move Zeroes
// Using two-pointer, fast pointer < nums.length, when fast pointer not equal to 0, change the fist none 0 value
// to the slow pointer position. slow pointer++, otherwise fast pointer++.
const nums2 = [0, 0, 7, 8, 0, 9];
const moveZeros = nums => {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      if (slow !== fast) {
        nums[slow] = nums[fast];
        nums[fast] = 0;
      }
      slow++;
    }
    fast++;
    // console.log(slow, fast);
  }
  // console.log(nums);
  return nums;
};

const moveZeros2 = nums => {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      if (slow !== fast) {
        nums[slow] = nums[fast];
        nums[fast] = 0;
      }
      slow++;
    }
  }
  return nums;
};

// console.log(moveZeros(nums2));

// Leetcode 122: Best Time to Buy and Sell Stock II
// If the second day is higer than the first day, buy it on first day and sell it on the second day. Until end.
// Input: [7, 1, 5, 3, 6, 4]
const maxProfit3 = prices => {
  let sum = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      sum += prices[i + 1] - prices[i];
    }
  }
  return sum;
};

// Leetcode 49: Group Anagrams
// First sort the string, and then if not in dict, put it in the dict and create an array, put the origin one in it,
// if the next one is the same, put it together, return all the key.value
// Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
const groupAnagrams = strs => {
  let result = [];
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let sortedAnagrams = strs[i]
      .split("")
      .sort()
      .join("");
    // console.log(sortedAnagrams);
    if (!map[sortedAnagrams]) {
      map[sortedAnagrams] = [];
    }
    map[sortedAnagrams].push(strs[i]);
    // console.log(map);
  }
  for (let key in map) {
    result.push(map[key]);
  }
  return result;
};

// Leetcode: Counting elements
// Give ana array arr, count element x such that x + 1 is also in arr.
// Input arr = [1, 3, 2 ,3, 5, 0] Ouput: 3
// Input arr = [1, 1, 3, 3, 5, 5, 7, 7] Ouput: 0
const countElements = arr => {
  let map = {};
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in map) {
      map[arr[i]] += 1;
    } else {
      map[arr[i]] = 1;
    }
  }
  for (let key in map) {
    if (Number(key) + 1 + "" in map) {
      sum += map[key];
    }
  }
  return sum;
};

// Leetcode: Backsapce String Compare
// Input: S = 'ab#c', T = 'ad#c' Output: ture, meet # will delete ifself and the previous one
// 'ab##' and 'c#d#' ture. Using stack or regex
const backspaceCompare = (S, T) => {
  let s1 = S;
  let s2 = T;
  for (let i of s1) {
    if (i === "#") {
      s1 = s1.replace(/\w?#/, "");
    }
  }
  for (let i of s2) {
    if (i === "#") {
      s2 = s2.replace(/\w?#/, "");
    }
  }
  // console.log(s1, s2);
  return s1 === s2;
};

const helper = str => {
  let stack = [];
  for (let i of str) {
    if (i !== "#") {
      stack.push(i);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
};
const backspaceCompare2 = (S, T) => {
  return helper(S) === helper(T);
};

// console.log(backspaceCompare2('ab#c', 'ad#c'))
