function foo(a, b) {
  return a + b;
}

function bar() {
  console.log(foo(1, '2')); // This will concatenate 1 and '2', resulting in '12'
}

bar();