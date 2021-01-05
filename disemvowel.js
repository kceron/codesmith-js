// Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

function disemvowel(string) {
 return string.replace(/[aeiou]/ig,'')
}
// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'