// Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.
function arrToObj(array, callback) {
    // ADD CODE HERE
    let obj = {};
    for(let i=0; i<array.length; i++){
      obj[array[i]] = callback(array[i])
    };
    return obj
};
  

// const arrOfStrings = ['beer', 'glue'];
// const capitalize = str => str.toUpperCase();
// console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }