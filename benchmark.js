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

bench.add('slice, 5 args', function () {
  fooSlice(1, 2, 3, 4, 5);
});

bench.add('fast, 5 args', function () {
  fooFast(1, 2, 3, 4, 5);
});

bench.add('slice, 8 args', function () {
  fooSlice(1, 2, 3, 4, 5, 6, 7, 8);
});

bench.add('slice, 8 args', function () {
  fooFast(1, 2, 3, 4, 5, 6, 7, 8);
});

bench.add('slice, 5 args, offset 2', function () {
  barSlice(1, 2, 3, 4, 5);
});

bench.add('fast, 5 args, offset 2', function () {
  barFast(1, 2, 3, 4, 5);
});

bench.add('slice, 10 args, offset 2', function() {
  barSlice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
});

bench.add('slice, 10 args, offset 2', function() {
  barFast(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
});

// Setup logger.
bench.on('cycle', function(event) {
  console.log(String(event.target));
});

bench.on('error', console.error);

bench.run();
