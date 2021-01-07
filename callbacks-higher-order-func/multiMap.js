// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
// ADD CODE HERE
function multiMap(arrOfVal, arrOfCallbacks){
    let resultObj = {};
    for(let i=0; i<arrOfVal.length; i++){
      let objValues = [];
        // let vals = arrOfCallbacks.forEach(callback => callback(arrOfVal[i]))
      for(let ii=0; ii<arrOfCallbacks.length; ii++){
        let callback = arrOfCallbacks[i]
        objValues.push(callback(arrOfVal[i]))
      }
          resultObj[arrOfVal[i]] = objValues
    };
    return resultObj
};

// function uppercaser(str) { return str.toUpperCase(); }
// function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
// function repeater(str) { return str + str; }
// const items = ['catfood', 'glue', 'beer'];
// const functions = [uppercaser, capitalize, repeater];
// console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }