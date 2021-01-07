// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.
// ADD CODE HERE
function majority(arr, callback){
    let trueValues = 0;
    let falseValues = 0;
    for(let i=0; i<arr.length; i++){
      if(callback(arr[i])){
        trueValues += 1
      }else{
        falseValues += 1
      }
    };
    if(trueValues <= falseValues){
      return false
    }else{
      return true
    }
};

// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false