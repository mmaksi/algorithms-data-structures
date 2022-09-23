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
'asflasfldaflasdmadssad'.length // O(1)