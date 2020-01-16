const { performance } = require("perf_hooks");
const nemo = ["nemo"];

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found");
      break;
    }
  }
  let t1 = performance.now();
  console.log(`Time took  + ${t1 - t0}`);
}

findNemo(nemo);

const nums1 = [1, 1];
const nums2 = [1];
var intersection = function(nums1, nums2) {
  let arr = nums1.filter(item => {
    return nums2.indexOf(item) > -1;
  });
  return Array.from(new Set(arr));
  // return nums1.filter(item => {
  //   return nums2.indexOf(item) > -1;
  // });
};
console.log(intersection(nums1, nums2));


const arr1 = ["a","b","c"];
const arr2 = ["d","e","f","g"];
const arr3 = ["a","b","c"];
const arr4 = ["d","e","f","c"];

const findCommonItem = (a1, a2) => {
  let res = a1.filter(item => {
    return a2.indexOf(item) > -1;
  })
  return res.length > 0 ? true : false
}

console.log(findCommonItem(arr1, arr2));
console.log(findCommonItem(arr3, arr4));