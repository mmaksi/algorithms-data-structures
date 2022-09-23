// Big O = O(1)
function constantTime(arr) {
  console.log(arr[0]);
}
function constantTime2(arr) {
  console.log(arr[0]);
  console.log(arr[1]);
}

// Big O = O(n)
function linearTime(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function linearTime2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + "!");
  }
}
function linearTime3(arr) {
  console.log(arr[0]);

  const middleIndex = Math.floor(arr.length/2)
  let index = 0

  while (index < middleIndex) {
    console.log(arr[index]);
    index++;
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(100);
  }
}
function findNemo() {
  const fish = [
    "dory",
    "bruce",
    "nemo",
    "marlin",
    "gill",
    "bloat",
    "nigel",
    "squirt",
  ];

  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === "nemo") {
      console.log("Found nemo");
      break; // we assume that nemo is at the end of the array
    }
  }
}
// Big O = O(n + m): Rule #3
function linearTime2(arr1, arr2) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr1[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr2[i] + "!");
  }
}

// O(n^2) - Quadratic Time
const pairs = [1, 2, 3, 4, 5];
for (let i = 0; i < pairs.length; i++) {
  for (let n = 0; n < pairs.length; i++) {
    console.log(pairs[i], pairs[n]);
  }
}

// Space Complexity - O(1)
function boo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
