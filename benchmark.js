var fargs = require('./');
var Suite = require('benchmark').Benchmark.Suite;
var bench = new Suite('fargs');
var slice = Array.prototype.slice;

function fooSlice () {
  return slice.call(arguments);
}

function fooFast () {
  return fargs(arguments);
}

function barSlice () {
  return slice.call(arguments, 2);
}

function barFast () {
  return fargs(arguments, 2);
}

bench.add('slice 5', function () {
  fooSlice(1, 2, 3, 4, 5);
});

bench.add('fast 5 ', function () {
  fooFast(1, 2, 3, 4, 5);
});

bench.add('slice 8', function () {
  fooSlice(1, 2, 3, 4, 5, 6, 7, 8);
});

bench.add('fast 8 ', function () {
  fooFast(1, 2, 3, 4, 5, 6, 7, 8);
});

bench.add('slice 5 (offset 2)', function () {
  barSlice(1, 2, 3, 4, 5);
});

bench.add('fast 5 (offset 2) ', function () {
  barFast(1, 2, 3, 4, 5);
});

bench.add('slice 10 (offset 2)', function() {
  barSlice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
});

bench.add('fast 10 (offset 2) ', function() {
  barFast(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
});

function rest (...args) {
  return args;
}

bench.add('rest params 6', function() {
  rest(1, 2, 3, 4, 5, 6);
});

// Setup logger.
bench.on('cycle', function(event) {
  console.log(String(event.target));
});

bench.on('error', console.error);

bench.run();
