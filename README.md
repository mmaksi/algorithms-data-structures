# Algorithms and Data Structures

Algorithms are functions and methods that use data structures to write programs.

## 1. Big O Asymptotic Analysis

### What is good code?

- Good code must be: readable + scalable (Speed + Memory)
- Run time: How long it takes to solve a problem.
- Big O is a measure of alogirthmic efficiency, how long an algorithm takes to run as the input increases.
- Big O matters only in large scale and large inputs. Big O is interested in knowing how the end of the graph would look like on a large scale. In other terms, Big O measures the scalability of the code.
- Big O measures the **time complexity** and **space complexity** of the code.

![big-o-chart](https://i.ibb.co/GtY4wJm/big-O-chart.png)

1. **O(n) - Linear Time**
   As the number of inputs increases, the number of operations increases proportionally.

- Looping over every element in `for` and `while` loops.
  ![big-o-linear-time](https://i.ibb.co/84J8zV6/o-n-chart.png)

2. **O(1) - Constant Time**
   As the number of inputs increases, the number of operations is always the same.

- No loops.
  ![big-o-constant-time](https://i.ibb.co/dMpwJ4L/o-1-chart.png)

3. **O(n^2) - Quadratic Time**
   As the number of inputs increases, the number of operations increases quadratically.

- Every element in a collection needs to be compared to every other element in the same array.
- Two nested loops for **the same array**.
  ![big-o-quadratic-time-chart](https://i.ibb.co/XVBTpSg/o-n-2-chart.png)

4. **O(n!) - Factorial Time**
   As the number of inputs increases, the number of operations increases quadratically.

- Adding a loop for every element.

### Big O Rules:

- Worst Case
- Remove Constants
- Different Terms for Inputs
- Drop Non Dominants

### Three Pillars of Programming:

- Readable
- Speed (Time Complexity) - Efficient Big O time complexity
- Memory (Space Complexity) - Efficient Big O space complexity

### What causes Time Complexity?

- Operations ( +, -, *, / )
- Comparisons
- Looping
- Outsidefunction calls

### What causes Space Complexity?

- Variables
- Data Structures
- Function Calls
- Allocations

### Space Complexity

When we talk about `Space Complexity` we talk about additional space, so we don't look at the size of the input. We look at how much space are we consuming inside the function.

## 2. How To Solve Coding Problems

- Being the best coder doesn't mean you're going to ace the technical interview.
- Companies look for people with analytical skills, coding skills, technical skills and communication skills.
- Check out the ![Big O cheat sheet](https://drive.google.com/file/d/1p_TSyks3Lz-dCIfu2DkNY6zTgM2wGpaT/view?usp=sharing)

## 3. Data Structures Introduction

### What is a Data Structure?

- Data Structures are collection of values, and these values can have relationships among them and functions related to them.
- Each Data Structure is useful for its own thing.

### How Computers Store Data?

- Variables are stored in RAM.
- RAMs are devided into `addresses` and each address has 1 byte (8 bits).
- The CPU uses the Memory Controller to read/write on the RAM.
- The CPU Cache holds data that are very very recent.
- Integers are usually represented in 32 bits (4 addresses = 4 bytes/lines in RAM).
- JavaScript `Infinity` is when we are unable to store the number in RAM.
- Data Structures are arrangement of data in RAM. How data is arranged in RAM has pros and cons on read/write. Selecting the best data structure means making the CPU perform operations as fast as possible.

### Operations on Data Structures

Insertion, Deletion, Traversal, Searching, Sorting, Access,

## 4. Arrays

- Arrays store data sequentially.
- Lookup, push, pop have `O(1)` because the computer knows where data are stored in RAM (sequentially)
- Unshift, splice have `O(n)` because it contains iterations over its items to re-order them.

### Static Arrays vs. Dynamic Arrays:

- Fixed in size. If you want to expand on their size, you need to copy and rebuild an array in a new location => double memory + time complexity `O(n)`.
- Dynamic arrays allow adding items without copying (most of the time) => `O(1)`.
- JavaScript arrays are dynamicc - they automatically allocate memory according to increase in size. They expand as you add more items. But rarely do they act like static arrays. So the `push` command can be either `O(n)` or `O(1)`.

### Note
Treat strings as arrays because a string is an array of characters.

## 5. Hash Tables
### Hash Tables Introduction
Hash Tables store `key-value` pairs where keys are passed to a hash function which in turn decides where in memory to store this pair based on its output.

### Hash Function
- Hash Function = a function that generates a value of fixed length of each input.
- Hash Functions are one-way functions.
- Small change in the input makes huge change in the output.
- Hash Functions are **idempotent**: they generate the same output for the same input.
- Every time you _add_ or _retrieve_ data from memory, the hash function will run

### Hash Collisions
**O(1) Operations:** <br />
insert, lookup, delete, search <br />
<br />
When data is hashed there is a chance that it will be stored in the same memory space of another data, causing a collision. There are many ways to resolve a collision, one way is Linked Lists data structure.<br />
When there is a collison occurs, the big O becomes O(n)

- In JS the keys are strengified.
- JS `Map` allows you to store and data type as keys. It also maintains insertion order.
- JS `Set` store only keys.

### Arrays vs Hash Tables
**Arrays** <br />
Search `O(n)` because we have to loop over all items.
Insert, delete `O(n)` because it might shift indexes.
Lookup, push `O(1)` because we know where the index is in memory.

### HashTables Pros & Cons
**Pros:** Fast lookup (Good collision resolution needed), fast inserts, flexible keys.
**Cons:** Unordered, Slow key iteration.
- Hash Tables can improve Time Complexity of nested loops but increases Space Complexity.

## 6. Linked Lists
- Linked Lists have two types: singly and doubly.
- Singly linked lists as shown below consist of nodes, where each node has two parts: one that holds the value to store and the other is a pointer to the value of the next node.
- Singly Linked Lists are null-terminated.
- The first node is called the **head** while the last node is called the **tail**.
![linked-lists-diagram]()
- Traversing is iterating over an iterable but we use that term because we don't know when we will hit `null`.
- Traversing over a Linked List is slower than iterating an array because Array elements are stored sequentially in memory while in Linked Lists they are scattered even though both operations are `O(n)`.
- Inserting and deleting in Linked Lists and Hash Tables are better than in Arrays.
- Linked Lists have order while Hash Tables don't.

### What is a Pointer?
A pointer is a reference in another place in memory. <br/>
Objects in JS are pointers to a memory space. Once we delete the object using the `delete` keyword, JS will automatically remove the memory that was allocated to that object. That's why it's called a _garbage collecting language_.

## Stacks and Queues
**Stacks** allow insert and remove operations and follow the _last in, first out_ principle (LIFO). <br />
**Queues** allow insert and remove operations and follow the _first in, first out_ principle (FIFO). <br />
Stacks and queues are linear data structures with ordered items, allowing us to traverse the data sequentially one by one, in which only one data element can be reached at a time. <br />
Stacks and Queues are higher-level data structures built on lower -level data structures, like arrays and linked lists, with limited methods. <br/>
Examples of stacks: JavaScript engine, browser history, undo/redo operations.<br/>
Examples of stacks: Uber, printer, restaurant.<br/>

- Stacks are dynamic arrays. => Lookup operations are `O(n) T`, `O(1) S`.
- Inserting elements in Stacks (push operations) is `O(1) ST`.
- Removing elements from Stacks (pop operations) is `O(1) ST`.
- Peek operations, viewing the last item is `O(1) ST`. <br />

- Queues are represented as linked lists.
- Inserting elements in queues (enqueue operation) is `O(1) ST` because we are replacing the head.
- Removing elements from queues (dequeue operation) is `O(1) ST` because we are replacing the tail.
- Peek operations, viewing the last item is `O(1) ST`. <br />