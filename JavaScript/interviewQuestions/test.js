let arr1 = [1, 2, 3, 4, 5];
let arr2 = [9, 8, 7, 6];

console.log(arr2.splice(1, 1, ...arr1, ...arr2.slice(1, 2)));

console.log(arr2);
