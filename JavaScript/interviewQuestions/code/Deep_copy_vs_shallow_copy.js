/*
Primitive data types are passed by value
Primitive data types are immutable
Note : Reassignment is not the same as mutable.

*/
let s = "str";
let s1 = s;
console.log(s === s1);

//Structural data types passes reference
let arr = [1, 3, 4, 5];
let b = arr;
console.log(b);
console.log(arr === b);

let c = [...arr];
console.log(c);
console.log(arr === c);

let a1 = [1, 2, 3, [4, 5, 6]];
let a11 = [...a1];
console.log(a1 === a11);
console.log(a1[3] === a11[3]);
a11[3].push(8);
console.log(a1);
console.log(a11);

function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    newObj[key] = deepClone(value);
  }

  return newObj;
}

let b1 = [1, 2, 3, [4, 5, 6]];
let b11 = deepClone(b1);
console.log(b1);
console.log(b11);
console.log(b1 === b11);
