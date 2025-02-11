function foo(a, b) {
  //Convert both parameters to numbers before performing addition
  a = Number(a);
  b = Number(b);
  //Check if the parameters are valid numbers
  if(isNaN(a) || isNaN(b)) {
    return 'Invalid input. Please provide numbers.';
  }
  return a + b; 
}

function bar() {
  console.log(foo(1, '2')); //This will perform addition resulting in 3
  console.log(foo(1,2)); //This will also perform addition resulting in 3
  console.log(foo('a',2)); //This will return 'Invalid input' message
}

bar();