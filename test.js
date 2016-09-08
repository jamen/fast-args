var fargs = require('./');
var test = require('tape');

test('without offset', function (t) {
  // Returns the result of `fargs` on it's own arguments
  function foo () {
    return fargs(arguments);
  }

  t.same(foo(1, 2, 3), [1, 2, 3], '3 args');
  t.same(foo(1, 2, 3, 4, 5, 6), [1, 2, 3, 4, 5, 6], '6 args');
  t.same(foo(1, 2, 3, 4, 5, 6, 7, 8), [1, 2, 3, 4, 5, 6, 7, 8], '8 args');

  t.end();
});

test('with offset', function (t) {
  function oneoff () {
    return fargs(arguments, 1);
  }

  t.same(oneoff(1, 2, 3), [2, 3], '3 args, 1 off');
  t.same(oneoff(1, 2, 3, 4, 5, 6), [2, 3, 4, 5, 6], '6 args, 1 off');
  t.same(oneoff(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), [2, 3, 4, 5, 6, 7, 8, 9, 10], '10 args, 1 off');

  function fouroff () {
    return fargs(arguments, 4);
  }

  t.same(fouroff(1, 2, 3), [], '3 args, 4 off');
  t.same(fouroff(1, 2, 3, 4, 5, 6), [5, 6], '6 args, 4 off');
  t.same(fouroff(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), [5, 6, 7, 8, 9, 10], '10 args, 4 off');

  t.end();
});
