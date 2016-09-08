var vargs = require('./');
var Suite = require('benchmark').Benchmark.Suite;
var bench = new Suite('vargs');
var slice = Array.prototype.slice;

function fooSlice () {
  return slice.call(arguments);
}

function fooFast () {
  return vargs(arguments);
}

function barSlice () {
  return slice.call(arguments, 2);
}

function barFast () {
  return vargs(arguments, 2);
}

bench.add('5 args, slice', function () {
  fooSlice(1, 2, 3, 4, 5);
});

bench.add('5 args, fast ', function () {
  fooFast(1, 2, 3, 4, 5);
});

bench.add('8 args, slice', function () {
  fooSlice(1, 2, 3, 4, 5, 6, 7, 8);
});

bench.add('8 args, slice', function () {
  fooFast(1, 2, 3, 4, 5, 6, 7, 8);
});

bench.add('5 args, offset 2, slice', function () {
  barSlice(1, 2, 3, 4, 5);
});

bench.add('5 args, offset 2, fast ', function () {
  barFast(1, 2, 3, 4, 5);
});

bench.add('10 args, offset 2, slice', function() {
  barSlice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
});

bench.add('10 args, offset 2, fast ', function() {
  barFast(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
});

function rest (...args) {
  return args;
}

bench.add('6 args, rest params', function() {
  rest(1, 2, 3, 4, 5, 6);
});

// Setup logger.
bench.on('cycle', function(event) {
  console.log(String(event.target));
});

bench.on('error', console.error);

bench.run();
