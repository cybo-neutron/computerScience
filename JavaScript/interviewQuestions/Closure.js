/*
closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. 
*/

function fn() {
  let x = 5;
  return function () {
    console.log(x);
  };
}

const f = fn();
f();
