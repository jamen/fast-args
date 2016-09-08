var slice = Array.prototype.slice.call.bind(Array.prototype.slice);

module.exports = vargs;

/** @module fast-args
  *
  * Turn variadic function arguments into an array with speed.
  *
  * a = aguments
  * o = offset
  */

function vargs (a, o) {
  o = o || 0;
  var length = a.length - o;

  // Handle common amounts manually.
  if (length <= 0) return [];
  switch (length) {
    case 1: return [a[o]];
    case 2: return [a[o++], a[o++]];
    case 3: return [a[o++], a[o++], a[o++]];
    case 4: return [a[o++], a[o++], a[o++], a[o++]];
    case 5: return [a[o++], a[o++], a[o++], a[o++], a[o++]];
    case 6: return [a[o++], a[o++], a[o++], a[o++], a[o++], a[o++]];
  }

  // Fall back on manual slice.
  var result = new Array(length);
  for (var i = 0; i < length; i++) result[i] = a[o + i];
  return result;
}
