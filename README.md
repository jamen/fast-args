# fast-variadic [![NPM version](https://badge.fury.io/js/fast-variadic.svg)](https://npmjs.org/package/fast-variadic) [![Build Status](https://travis-ci.org/jamen/fast-variadic.svg?branch=master)](https://travis-ci.org/jamen/fast-variadic)

> Turn variadic function arguments into an array with speed.

```js
var vargs = require('fast-variadic');

function foo() {
  return vargs(arguments);
}

foo(1, 2, 3);
// => [1, 2, 3]
```

The majority of functions out there don't go over 6 arguments, so I made this to use a switch for manually making an array 1 through 6, and then fall back on slice for higher than that.

## Installation

```sh
$ npm install --save fast-variadic
```

## Usage

```js
var fastVariadic = require('fast-variadic');
fastVariadic();
```

## License

MIT © [Jamen Marz](https://github.com/jamen)
