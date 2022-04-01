const { arrayContain } = require('./3-array-contain');

function generateUnorderedArray(size) {
  let array = []; //1
  for (let i = 0; i < size; i++) { //5
    let number = Math.floor(Math.random() * 100); //4
    while (arrayContain(array, number)) { // n
      number = Math.floor(Math.random() * 100); //4
    }
    array.push(number); //2
  }
  return array; //1
}

module.exports = { generateUnorderedArray };

/**
 * T4(n) = 1 + 5n(4+ n(4) +2) + 1
 * T4(n) = 5n(4 + 4n + 2) + 2
 * T4(n) = n(n) + 1
 * O(n) = n^2
 */