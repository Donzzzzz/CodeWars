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
