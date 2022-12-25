const mapper = <T>(items:T[], fn:( T) => T): T[]=> {
//     let res :T[]= []
//     for (let i = 0; i < items.length; i++)
//     {
//         const item = fn(items[i]);
//         res.push(item);
//     }
//     return res;
// }

// const mapped = mapper(arr, (item) => item * item);
// console.log(mapped)