// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
// ADD CODE HERE
function intersection(arrayOfArrays){
    return arrayOfArrays.reduce((accumulator, currentVal) => {
      let results = [];
      
      accumulator.forEach((elem) => {
        if(currentVal.includes(elem)){
           results.push(elem)
          }
      })
      return results;
    });
};
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]