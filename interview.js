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

console.log(reverse("addwww"));

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

console.log(findSameNum3([2, 3, 1, 0, 1]));
