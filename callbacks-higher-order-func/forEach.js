// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.
// Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.
// ADD CODE HERE
function forEach(arr, callback){
    let newArr = []
    for(let i=0; i<arr.length; i++){
      newArr.push(callback(arr[i]))
    }
    return newArr
  };
  
  function map(arr, callback){
      return forEach(arr,callback)
  };
// console.log(typeof forEach); // should log: 'function'
// forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]