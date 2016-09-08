var vargs = require('./');
var test = require('tape');

test('without offset', function (t) {
  // Returns the result of `vargs` on it's own arguments
  function foo () {
    return vargs(arguments);
  }

  t.same(foo(1, 2, 3), [1, 2, 3], '3 args');
  t.same(foo(1, 2, 3, 4, 5, 6), [1, 2, 3, 4, 5, 6], '6 args');
  t.same(foo(1, 2, 3, 4, 5, 6, 7, 8), [1, 2, 3, 4, 5, 6, 7, 8], '8 args');

  t.end();
});

test('with offset', function (t) {
  function oneoff () {
    return vargs(arguments, 1);
  }

  t.same(oneoff(1, 2, 3), [2, 3], '1 off, 3 args');
  t.same(oneoff(1, 2, 3, 4, 5, 6), [2, 3, 4, 5, 6], '1 off, 6 args');
  t.same(oneoff(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), [2, 3, 4, 5, 6, 7, 8, 9, 10], '1 off, 10 args');

  function fouroff () {
    return vargs(arguments, 4);
  }

  t.same(fouroff(1, 2, 3), [], '4 off, 3 args');
  t.same(fouroff(1, 2, 3, 4, 5, 6), [5, 6], '4 off, 6 args');
  t.same(fouroff(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), [5, 6, 7, 8, 9, 10], '4 off, 10 args');

  t.end();
});
