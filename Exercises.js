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
