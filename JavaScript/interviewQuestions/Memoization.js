//Normal
console.log("--------- NORMAL SUM -------\n");
function normalSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.time();
console.log(normalSum(9000000));
console.timeEnd();

console.time();
console.log(normalSum(9000000));
console.timeEnd();

console.time();
console.log(normalSum(9000000));
console.timeEnd();

//Normal Cache
console.log("\n--------- NORMAL CACHE -------\n");
let cache = [];

function calcSum(n) {
  let sum = 0;
  if (cache[n] != null) return cache[n];
  for (let i = 1; i <= n; i++) {
    sum += i;
    // if (cache[i] == null) cache[i] = sum;
  }
  cache[n] = sum;
  return sum;
}

console.time();
console.log(calcSum(9000000));
console.timeEnd();

console.time();
console.log(calcSum(9000000));
console.timeEnd();

console.time();
console.log(calcSum(9000000));
console.timeEnd();

//memoizing the normal function
console.log("\n------ Memoize the normal function -----\n".toUpperCase());

const memoize = (fn) => {
  cache = {};
  return function (n) {
    if (cache[n] != null) {
      return cache[n];
    } else {
      let sum = fn(n);
      cache[n] = sum;
      return sum;
    }
  };
};

const memoizedSum = memoize(normalSum);

console.time();
console.log(memoizedSum(9000000));
console.timeEnd();

console.time();
console.log(memoizedSum(9000000));
console.timeEnd();

console.time();
console.log(memoizedSum(9000000));
console.timeEnd();
