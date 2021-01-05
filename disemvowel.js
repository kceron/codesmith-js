// Write a function disemvowel that takes in a string and returns a new string with all vowels removed.
// SOLUTION 1. Using Regex
// function disemvowel(string) {
//  return string.replace(/[aeiou]/ig,'')
// }
// SOLUTION 2. Obj and for loop
function disemvowel(string) {
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    };
    let result = '';
    
    for(let i=0; i<string.length; i++){
        let letter = string[i].toLowerCase()
        if(!vowels[letter]){
            result += string[i]
        }
    }
    return result
   };


// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'