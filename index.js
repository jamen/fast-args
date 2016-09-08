var slice = Array.prototype.slice;

module.exports = vargs;

/** @module fast-variadic
  *
  * Turn variadic function arguments into an array with speed.
  *
  * a = aguments
  * o = offset
  */

function vargs (a, o) {
  o = o || 0;

  // If offset is less than -1, exit.
  if (o < 0) return [];

  // Handle common amounts manually.
  switch (a.length - o) {
    case 0: return [];
    case 1: return [a[o]];
    case 2: return [a[o++], a[o++]];
    case 3: return [a[o++], a[o++], a[o++]];
    case 4: return [a[o++], a[o++], a[o++], a[o++]];
    case 5: return [a[o++], a[o++], a[o++], a[o++], a[o++]];
    case 6: return [a[o++], a[o++], a[o++], a[o++], a[o++], a[o++]];
  }

  // Fall back on slice for more than 6 arguments.
  return slice.call(a, o);
}
