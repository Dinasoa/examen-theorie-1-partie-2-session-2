function slice(array, start, end) {
  let slicedArray = []; // 1
  for (let i = start; i < end; i++) { //6
    slicedArray.push(array[i]); // 2
  }
  return slicedArray; // 1
}

module.exports = { slice };

/**
 * T1(n) = 1 + 6*n (2) + 1
 * T1(n) = 6n(3) + 1 
 * T1(n) = n + 1
 * O(n) = n
 */
