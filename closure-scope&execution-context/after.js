// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
// ADD CODE HERE
function after(num, callback){
  let count = 0
  function canExecute(string){
    count++
  	if(count >= num){
    	return callback(string)
  	}else if(count < num){
    	return
  	};
	};
  return canExecute;
};

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> 'hello world' is printed