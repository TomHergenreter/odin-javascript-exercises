const add = function(...numbers) {
  let sum = 0;
	for(num of numbers) {
    sum += num;
  };
  return sum
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(numbers) {
 if (numbers.length > 0){  
  return numbers.reduce((total, num) => {return total + num});
 };
 return 0;
};

const multiply = function(numbers) {
  return numbers.reduce((total, num) => {return total * num});
};

const power = function(x, y) {
  return Math.pow(x,y);
};

const factorial = function(num) {
  let factorial = num;
  if(num === 0 || num === 1){
    return 1;
  }else{
    while(num > 2){
      num --;
      factorial *= num;
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
