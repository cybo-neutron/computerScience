/*
Reproduce foreach,filter and map using reduce and it should be typesafe


*/

const arr = [1, 2, 3, 4, 5]

// console.log(arr.reduce())

function myForeach<T>(items:T[],fn:(val:T)=>void):void {
    
    items.reduce((undefined,val) => {
        fn(val);
        return undefined;
    },undefined)
}

myForeach(arr, (item) => { console.log(`${"Foreach"} ${item}`) });


function myFilter<T>(items: T[], fn: (val: T) => boolean): T[]{
    
    return items.reduce((prev, val) => {
        console.log(val)
        if (fn(val))
            return [...prev, val];
        return prev
    },[] as T[])
}

console.log(myFilter(arr, (val) => val % 2 == 0));



function myMap<T,K>(items: T[], fn: (val: T) => K): K[]{
    
    return items.reduce((prev, val) => {
        return [...prev,fn(val)];
    },[] as K[])
}


console.log(myMap(arr, (val) => (val * val)));