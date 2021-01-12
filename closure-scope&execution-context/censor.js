// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).
// ADD CODE HERE
function censor(){
  let storedStrings = {}
  return function(strOne, strTwo){
    if(strTwo){
      storedStrings[strOne] = strTwo
      return;
    }
    Object.keys(storedStrings).forEach(key => {
      strOne = strOne.replace(key, storedStrings[key])
    })
    return strOne;
  };
};

// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'