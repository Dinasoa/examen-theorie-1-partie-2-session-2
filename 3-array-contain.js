function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) { //5
    if (array[i] === number) { //3
      return true; //1
    }
  }
  return false; //1
}

module.exports = { arrayContain };

/**
 * T3(n) = 5n (3+1) + 1
 * T3(n) = 5n(4) + 1
 * T3(n) = 5n + 1
 * T3(n) = n
 * O(n) = n (linéaire)  
 */
