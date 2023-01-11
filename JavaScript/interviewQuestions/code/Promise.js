const p1 = new Promise((resolve, reject) => {
  resolve("hello world");
});

console.log(p1);

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 500);
});

console.log(p2);
p2.then((res) => {
  console.log(res);
});

const p3 = new Promise((resolve, reject) => {
  resolve("Hello");
});

p3.then((res) => {
  //   console.log("P3");
  return res + " dude";
}).then((res) => {
  console.log(res);
});
