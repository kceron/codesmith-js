// Create a function createFunctionWithInput that accepts one input and returns a function. When that created function is called, it should return the input that was passed to createFunctionWithInput when it was created.
// ADD CODE HERE
function createFunctionWithInput(input){
  function inputIs(){
    return input
  }
  return inputIs;
};

// const sampleFunc = createFunctionWithInput('sample');
// console.log(sampleFunc()); // should log: 'sample'
// const helloFunc = createFunctionWithInput('hello');
// console.log(helloFunc()); // should log: 'hello' 