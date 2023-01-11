let arr = [1, 2, 3, 4, 6, 7, 9, 3];
let [a, b, ...rest] = arr;
console.log({ a, b, rest });
let { [3]: third } = arr; //Dereferencing third element
console.log(third);

let obj = {
  cats: [{ name: "bob" }, { name: "jack" }, { name: "tom" }],
};

let {
  cats: { [2]: cat },
} = obj;

console.log(cat);
