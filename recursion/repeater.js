// Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.
console.log('Hello, world!');
let result = "";
function repeater(char) {
	if (result.length === 5) { return result }
  result += char;
  return repeater(char);
};

// console.log(repeater('g'));
