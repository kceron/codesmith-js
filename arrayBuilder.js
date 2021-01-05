// Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.
// ADD CODE HERE
function arrayBuilder(obj) {
  let arr = [];
  let count = 0;
  for(const property in obj){
    count = obj[property]
    for (let i = 0; i < count; i++) {
    arr.push(property);
  	}
  }
  return arr
};

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); // => []