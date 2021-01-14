// Get the length of an array using recursion without accessing its length property.
function getLength(array, length=0) {
  if(array[0] === undefined) return length;
  length++
  return getLength(array.slice(1), length)
};

// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0
