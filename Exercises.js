// Reverse a string
function reverse1(str) {
  const reversedArr = [];
  let strLength = str.length;
  for (let i = 0; i < str.length; i++) {
    reversedArr[i] = str[strLength - 1];
    strLength--;
  }
  return reversedArr.join("");
}
function reverse2(str) {
  return str.split("").reverse().join();
}
function reverse3(str) {
  return [...str].reverse().join("");
}
function reverse4(str) {
  const reversedArr = [];
  let totalCharacters = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    reversedArr[i] = str[strLength - 1];
    strLength--;
  }
  return reversedArr.join("");
}

// Merge Sorted Arrays
function mergeAndSort(arr1, arr2) {
  const mergedArr = [];
  let i = 0;
  while (arr2[i] > arr1[i]) {}
}

/**
 * Log all pairs of an array
 */
function logEachPairs(input) {
  for (let i = 0; i < input.length; i++) {
    for (let y = 0; y < input.length; y++) {
      console.log(input[i], input[y]);
    }
  }
}

// What's the Big O of this?
"asflasfldaflasdmadssad".length; // O(1)

// Interview Question Exercise
/**
 * @Input two arrays
 * @Output boolean
 * @Purpose find the common items between the two arrays
 */

// Interview Question Exercise - Google
const array = [2, 5, 1, 3, 1];
function firstRecurring(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] !== undefined) {
      return array[i];
    } else {
      obj[array[i]] = true;
    }
  }
  return undefined;
}

firstRecurring(array);

var runningSum = function (nums) {
  let total = 0;
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    output.push(total);
  }
  return output;
};
runningSum([1, 2, 3]);

var isIsomorphic = function (s, t) {
  // Check if strings are same length
  if (s.length != t.length) return false;

  for (var i = 0; i < s.length; i++) {
    // Check matched letters in string #1
    var index = s.indexOf(s[i], i + 1);
    // if there are matched letters in string #1 AND their indexes dont match in string #2
    if (index > -1 && t[i] != t[index]) return false;

    // Check matched letters in string #2
    var index2 = t.indexOf(t[i], i + 1);
    if (index2 > -1 && s[i] != s[index2]) return false;
  }

  return true;
};
isIsomorphic("potato", "lopapo");

var isSubsequence = function (s, t) {
  let pos = 0;
  if (s.length === 0) return true;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[pos]) {
      pos++;
    }
  }
  if (pos === s.length) return true;
  return false;
};
isSubsequence("abc", "habgdc");
isSubsequence("axc", "ahbgdc");
