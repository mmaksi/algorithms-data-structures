class MyArray {
  constructor() {
    this.length;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = 0; i < index.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

// Reverse a string problem
function reverseString(text) {
  const textArray = text.split("");
  const reversedArray = [];
  for (let index = textArray.length - 1; index > -1; index--) {
    const element = textArray[index];
    reversedArray.push(element);
  }
  return reversedArray;
}

function reverseString2(text) {
  return text.split("").reverse().join("");
}

function reverseString3(str) {
  return [...str].reverse().join("");
}
reverseString("text");

// Merge sorted arrays problem
function mergeSortedArray(arr1, arr2) {
  const newArray = [];
  // Pointer for each element in each array
  let firstPointer = 0;
  let secondPointer = 0;

  // Loop over the two arrays using pointers to compare values
  while (firstPointer < arr1.length || secondPointer < arr2.length) {
    if (arr1[firstPointer] < arr2[secondPointer]) {
      newArray.push(arr1[firstPointer]);
      firstPointer++;
    } else if (arr1[firstPointer] === arr2[secondPointer]) {
      newArray.push(arr1[firstPointer]);
      newArray.push(arr2[secondPointer]);
      firstPointer++;
      secondPointer++;
    } else if (arr1[firstPointer] > arr2[secondPointer]) {
      newArray.push(arr2[secondPointer]);
      secondPointer++;
    } else if (arr1[firstPointer] === undefined) {
      newArray.push(arr2[secondPointer]);
      secondPointer++;
    } else if (arr2[secondPointer] === undefined) {
      newArray.push(arr1[firstPointer]);
      firstPointer++;
    }
  }
}
