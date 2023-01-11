const inp = document.getElementById("search");
const imp_search = document.getElementById("impv_search");

// Normal function
let counter = 0;
inp.addEventListener("keyup", (e) => {
  getData(e.target.value);
});

function getData(val) {
  console.log("Fetching data.....", counter++);
  console.log(val);
}

//Debouncing
function debounce(fn, waitTime) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, waitTime);
  };
}

const debouncedGetData = debounce(getData, 200);

let newCounter = 0;

imp_search.addEventListener("keyup", (e) => {
  debouncedGetData(e.target.value);
});
