function hof(cb) {
  cb();
}

hof(() => {
  console.log("hello world");
});

//-------------------------------------
let radiuses = [1, 2, 3, 7, 45];

function calculate(radiuses, cb) {
  let arr = [];
  for (const item of radiuses) {
    arr.push(cb(item));
  }
  return arr;
}
//Area
console.log(calculate(radiuses, (item) => Math.PI * item * item));
//Circumference
console.log(calculate(radiuses, (item) => 2 * Math.PI * item));
//Diameters
console.log(calculate(radiuses, (item) => 2 * item));
