function foo(x) {
  if (x === null) {
    return "null";
  } else if (x === undefined) {
    return "undefined";
  } else if (x === 0) {
    return "zero";
  } else {
    return x;
  }
}

console.log(foo(null)); // Output: null
console.log(foo(undefined)); // Output: undefined
console.log(foo(0)); // Output: zero
console.log(foo(1)); // Output: 1