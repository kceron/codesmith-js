// Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.
// ADD CODE HERE
function prioritize(arr, callback){
    let resultArr = []
    let trueValues = []
    let falseValues = []
    for(let i=0; i<arr.length; i++){
      if(callback(arr[i])){
        trueValues.push(arr[i])
      }else{
        falseValues.push(arr[i])
      }
    };
    return resultArr = trueValues.concat(falseValues)
};

// function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']