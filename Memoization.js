function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) return cache[n];
    console.log("Long time...");
    cache[n] = n + 80;
    return cache[n];
  };
}

// Closure
const memoized = memoizedAddTo80();

memoized(5);
memoized(10);
