# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gulsemin/lotide`

**Require it:**

`const _ = require('@gulsemin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual`: Returns pass or fail by comparing actual and expected arrays.
* `assertEqual`: Prints pass or fail by comparing actual and expected values.
* `assertObjectsEqual`: Returns pass or fail by comparing actual and expected objects.
* `countLetters`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly`: This function should take in a collection of items and return counts for a specific subset of those items
* `eqArrays`: Prints arrays are equal or not by comparing two arrays.
* `eqObjects`:  will take in two objects and returns true or false, based on a perfect match.
* `findKey`: Accepts two arguments - an object and a callback.Returns the first key for which the callback equals a truthy value after iterating through the object.
* `findKeyByValue`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten`: Returns a new array by merging two arrays that are nested.
* `head`: Returns the first element of an array.
* `letterPositions`: will return all the indices (zero-based positions) in the string where each character is found.
* `map`: Returns the first letter of each element in an array.
* `middle`: Return the middle-most element(s) of the given array.
* `tail`: Returns an array after removing the first element.
* `takeUntil`: Accepts two arguments - an array and callback function. Returns a new array of items occuring until the end point that is specified by the callback function.
* `without`: Accepts two arguments - an array and items to remove. Returns a new array that excludes the items that are removed.
