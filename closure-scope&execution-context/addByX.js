// Now we are going to create a function addByX that returns a function that will add an input by x.
// ADD CODE HERE
function addByX(input){
  let x = input
  function addInput(num){
    return x + num;
  }
  return addInput;
};
const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output. Should return 3
addByX(1)
// Now call addByTwo with an input of 2 and log the output. Should return 4
addByX(2)
