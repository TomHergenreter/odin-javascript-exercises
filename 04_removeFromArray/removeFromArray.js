//accept two arguments, one array and multiple strigs spread into a seperate array
//compare arrays, filter first array for numbers that do not match in second array
//pass to new array.
const removeFromArray = function(numberArray, ...numbersToRemove) {
    const slicedArray = numberArray.filter(element => !numbersToRemove.includes(element))
    console.log(slicedArray);
    return slicedArray;
};

// Do not edit below this line
//const intersection = array1.filter(element => array2.includes(element));
module.exports = removeFromArray;
