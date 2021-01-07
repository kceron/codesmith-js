// Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.
// ADD CODE HERE
function countBy(arr, callback){
    let obj = {}
    for(let elem of arr){
      if(callback(elem) in obj){
        obj[callback(elem)]++
      }else{
        obj[callback(elem)] = 1
      }
     };
    return obj
};

// function evenOdd(n) {
//   if (n % 2 === 0) return 'even';
//   else return 'odd';
// }
// const nums = [1, 2, 3, 4, 5];
// console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }