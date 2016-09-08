# fast-args [![NPM version](https://badge.fury.io/js/fast-args.svg)](https://npmjs.org/package/fast-args) [![Build Status](https://travis-ci.org/jamen/fast-args.svg?branch=master)](https://travis-ci.org/jamen/fast-args)

> Turn function arguments into an array with speed.

**Note:** Use [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) for the fastest method of variadic functions in ES6.  This module is second best, also for anything ES5 and below.

```js
var fargs = require('fast-args');

function foo() {
  return fargs(arguments);
}

foo(1, 2, 3);
// => [1, 2, 3]
```

The majority of functions out there don't go over 6 arguments.  So, this uses a switch for manually making an array when there are 1 through 6 arguments, and then falls back on a fast custom slice for any number of arguments higher than that.

## Installation

```sh
$ npm install --save fast-args
```

## API

### `fargs(arguments, [offset])`
Turn the `arguments` object into an array.  This is the only export of the module.
 - `arguments`: The `arguments` object of a function.
 - `offset` (`Number`): The index to start on `arguments`.

```js
var fargs = require('fast-args');

function foo() {
  var args = fargs(arguments, 1);
  // ...
}
```

### Meta

 - `npm test`: Run tests.
 - `npm run bench`: Run benchmarks.

## License

MIT © [Jamen Marz](https://github.com/jamen)
