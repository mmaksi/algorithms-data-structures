# Algorithms and Data Structures
Algorithms are functions and methods that use data structures to write programs.
## 1. Big O
1. What is good code?
- Good code must be: readable + scalable
- Run time: How long it takes to solve a problem.
- Big O is a measure of alogirthmic efficiency, how long an algorithm takes to run.
- Big O matters only in large scale and large inputs. Big O is interested in knowing how the end of the graph would look like on a large scale.

2. O(n) - Linear Time
As the number of inputs increases, the number of operations increases proportionally.
- `for` and `while` loops.
![big-o-linear-time]()

3. O(1) - Constant Time
As the number of inputs increases, the number of operations is always the same.
- No loops.
![big-o-constant-time-chart]()

4. O(n^2) - Quadratic Time
As the number of inputs increases, the number of operations increases quadratically.
- Every element in a collection needs to be compared to every other element in the same array.
- Two nested loops for the same array.
![big-o-quadratic-time-chart]()

5. O(n!) - Factorial Time
As the number of inputs increases, the number of operations increases quadratically.
- Adding a loop for every element.
![big-o-factorial-time-chart]()

![big-o-chart]()

4. Big O Rules:
    1. Worst Case
    2. Remove Constants
    3. Different Terms for Inputs
    4. Drop Non Dominants

5. Three Pillars of Programming:
    1. Readable
    2. Speed (Time Complexity) - Efficient Big O time complexity
    2. Memory (Space Complexity) - Efficient Big O space complexity

6. Space Complexity
When we talk about `Space Complexity` we talk about additional space, so we don't look at the length of the array input of a function.


## 2. How To Solve Coding Problems
- Being the best coder doesn't mean you're going to ace the technical interview.
- Companies look for people with analytical skills, coding skills, technical skills and communication skills.

## 3. Data Structures Introduction
Data Structures = collection of values
Algorithms = steps and processes to manipulate data structures
### What is a Data Structure?
- Data Structures are collection of values, and these values can have relationships among them and functions related to them.
- Each Data Structure is useful for its own thing. 

### How Computers Store Data?
- Variables are stored in RAM.
- RAMs are devided into `addresses` and each address has 1 byte of 8 bits.
- The CPU uses the Memory Controller to read/write on the RAM.
- The CPU Cache holds data that are very very recent.
- Integers are usually represented in 32 bits (4 addresses/lines in RAM)
- JavaScript `Infinity` is when we are unable to store the number in RAM.
- Data Structures are arrangement of data in RAM. How data is arranged in RAM has pros and cons on read/write. Selecting the best data structure means making the CPU perform operations as fast as possible.

### Operations on Data Structures
Insertion, Deletion, Traversal, Searching, Sorting, Access,

## 4. Arrays
- Arrays store data sequentially.
- Lookup, push, pop have `O(1)` because the computer knows where data are stored in RAM (sequentially)
- Unshift, splice have `O(n)` because it contains iterations over its items to re-order them.

### Static Arrays:
- Fixed in size
- Dynamic arrays allow to copy and rebuild an array in a new location which means more memory
- JavaScript arrays are dynamicc - they automatically allocate memory according to increase in size. They expand as you add more items.

### Implementing an Array
