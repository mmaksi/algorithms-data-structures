const nums = [99, 54, 30, 33, 1, 0, 62, 77];

// Bubble Sort
function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // Swap the numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// Selection Sort
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

// Insertion Sort
function insertionSort(array) {
    const length = array.length;

    
}
