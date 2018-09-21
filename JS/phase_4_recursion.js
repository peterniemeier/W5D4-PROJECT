// range(start, end)

function range(start, end) {
  if (start === end) {
    return end;
  }
  return [start].concat(range(start+1, end));
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let first = arr[0];
  let second = arr.slice(1);
  return first + sumRec(second);
}

function exponent(base, exp) {
  if (exp === 1) {
    return base;
  }
  return base * exponent(base, exp -1);
}

function fib(n) {
  if (n < 2) {
    return [1,1];
  }

  let fibs = [fib(this.length) + fib(n - 2)];
  return [fib(n - 1)].concat(fibs);
}
