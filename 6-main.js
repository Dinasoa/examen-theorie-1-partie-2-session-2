const { slice } = require('./1-slice');
const { merge }= require('./2-merge');
const { generateUnorderedArray } = require('./4-generate-unordered-array');

function sort(array) {
  if (array.length <= 1) { //2
    return array; //1
  }
  const middle = Math.floor(array.length / 2); // 1 + 1(log(n))
  const left = slice(array, 0, middle); // 1 + n(log(n)+1)
  const right = slice(array, middle, array.length); // 1 + n(log(n)+2)  
  return merge(sort(left), sort(right)); //nlogn
}

const array = generateUnorderedArray(10); // 2
console.log(array); // 1
console.log(sort(array)); // 1 

/**
 * T6(n) = 2 + 1 + 1 + 1(log(n)) + 1 + n(log(n) + 1) + 1 + n(log(n)+2) + nlogn + 2 + 1 + 1
 * J'ai ignoré toutes les constantes
 * T6(n) =  log(n) + nlogn + nlogn + nlogn
 * T6(n) = log(n) + 3nlogn 
 * T6(n) = log(n) + nlogn
 */