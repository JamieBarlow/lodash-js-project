<div align="center">
  <h1>Build a JavaScript Library - project :closed_book:</h1>
  <strong>By Jamie Barlow</strong>
</div>

## Purpose / Functionality :bulb:

- This project is built on a Codecademy exercise, with the purpose of recreating a number of important functions from the widely-used [Lodash.JS](https://lodash.com/docs/4.17.15) library. The library contains many useful methods for working with numbers, strings, objects, and arrays in JavaScript.
- In creating the methods, I followed the practice of Design Thinking methodology (Specify, Ideate, Implement, Test), laid out as:
    - **Specify** the functionality of the method we are implementing;
    - **Ideate** a game plan for how to implement this functionality in code;
    - **Implement** our game plan;
    - **Test** our code to ensure it works as expected.
- The **Specify** stage was covered in the exercise and Lodash documentation, which both outline the functionality that should be expected from each method. It was then my task to plan (**Ideate**) a solution for achieving this intended functionality, before **implementing** using my existing knowledge of JS logic - e.g. conditionals, array methods, loops, iterators, and objects. 
- Finally, to ensure each method met its specification, I would **test** them using pre-written test code, run with Node.JS (a suite of test files is also included in the repository).
- As the test code had been written before the implementation code, this can be considered an exercise in **Test-Driven Development (TDD)**, i.e. the purpose of each method is specified or effectively 'documented' in the test code. The advantage here was that I was able to quickly determine whether a method worked as intended, and iterate as necessary to meet the necessary conditions.

## Features :heavy_check_mark:

Methods that I created are as follows:

### .clamp()
- Takes three arguments: a number, a lower bound, and an upper bound.
- This then modifies the provided number to be within the two provided bounds.
- Ff the provided number is smaller than the lower bound, it will return the lower bound as the final number.
- If the number is larger than the upper bound, it will return the upper bound as the final number.
- If the number is already within the two bounds, it will return the number as the final number.

### .inRange()
- Takes three arguments: a number, a start value, and an end value.
- Checks to see if the provided number falls within the range specified by the start and end values.
- If the provided number is smaller than the start value, `.inRange()` will return false.
- If the provided number is larger than or equal to the end value, `.inRange()` will return `false`.
- If the provided number is within the start and end values, `.inRange()` will return `true`.
- If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value.
- If the provided start value is larger than the provided end value, the two values should be swapped.

### .words()
- Takes one argument: a string.
- Splits the string into an array of words.
- A word is defined by a space-separated string of characters, so each space character, `' '`, indicates the end of one word and the start of the next.

### .pad()
- Takes two arguments: a string and a length (number of characters).
- Adds spaces evenly to both sides of the string to make it reach the desired length.
- Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length.
- Your method does not need to accept the additional chars parameter; we will only add space characters to pad our string.

### .has()
- Takes two arguments: an object and a key.
- Checks to see if the provided object contains a value at the specified key.
- Will return `true` if the object contains a value at the key and will return `false` if not.

### .invert()
- Takes one argument: an object.
- Iterates through each key / value pair in the provided object and swaps the key and value.
- In the case of duplicate values in the object, subsequent values will overwrite property assignments of previous values.

### .findKey()
- Takes two arguments: an object and a *predicate function* (a function that returns a boolean value).
- Iterates through each key / value pair in the provided object and calls the predicate function with the value.
- Returns the first key that has a value that returns a truthy value from the predicate function.
- Returns `undefined` if no values return truthy values from the predicate function.

### .drop()
- Takes two arguments: an array and a number representing the number of items to drop from the beginning of the array.
- Returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array.
- If the number of elements to drop is unspecified, your method should drop one element.

### .dropWhile()
- Takes two arguments: an array and a predicate function.
- The supplied predicate function takes three arguments: the current element, the current element index, and the whole array.
- Creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value.

## Technologies :floppy_disk:

- JavaScript
- Node.JS

## How to Use :page_with_curl:

- All functions are written as methods within a JavaScript object (initialised simply as _), and can therefore be accessed by invoking e.g. _.words(str).
- To test a method, simply run the relevant test file using e.g. node test/lodash.js in your Node.JS terminal. There is a separate file for each method.

## Future Development :hourglass:

- Within the test suite there are test files for .assert(), .chunk() and .find-key() - methods to be created.
- The Lodash library contains many more functions, so there is plenty of potential for further practice here.

## License :scroll:

- [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
