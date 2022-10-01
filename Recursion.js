let counter = 0;
function inception() {
  if (counter > 3) {
    return "done!";
  }
  counter++;
  inception();
  //  inception(inception(inception(inception())))
}
inception(); // returns undefined

function inception() {
  if (counter > 3) {
    return "done!";
  }
  counter++;
  return inception();
}
inception(); // returns 'done!'

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 1) {
    answer = 2;
  }
  for (let i = 0; i < number; i++) {
    answer = answer * i;
  }
  return answer;
}

// O(N)
function fibonacciRecursive(index) {
  if (index < 2) return index;
  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}
fibonacciRecursive(4)

// O(2^N)
function fibonacciIterative(index) {
  const arr = [0, 1];
  if (index <= 1) return index;
  while (arr.length !== index + 1) {
    const newNum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(newNum);
  }
  return arr[arr.length - 1];
}
