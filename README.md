# fast-args [![NPM version](https://badge.fury.io/js/fast-args.svg)](https://npmjs.org/package/fast-args) [![Build Status](https://travis-ci.org/jamen/fast-args.svg?branch=master)](https://travis-ci.org/jamen/fast-args)

> Turn variadic function arguments into an array with speed.

```js
var vargs = require('fast-args');

function foo() {
  return vargs(arguments);
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

### `vargs(arguments)`
Turn the `arguments` object into an array.  This is the only export of the module.
 - `arguments`: The `arguments` object of a function.

```js
var vargs = require('fast-args');

function foo() {
  var args = vargs(arguments);
  // ...
}
```

### Meta

 - `npm test`: Run tests.
 - `npm run bench`: Run benchmarks.

## License

MIT © [Jamen Marz](https://github.com/jamen)
