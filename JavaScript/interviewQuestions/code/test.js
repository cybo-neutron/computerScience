let x = 0.1;
let y = 0.2;
let z = x + y;

console.log(z);

let obj = new Object();
console.log(obj);

let mp = new Map();
console.log(mp.__proto__);

let wm = new WeakMap();
wm.set([3], 5);
console.log(wm);
console.log(wm.get([3]));
