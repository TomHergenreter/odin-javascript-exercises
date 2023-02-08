

const sumAll = function(...numbers){ //push numbers to array

    const lowNum = Math.min(...numbers); //get lowest number from numbers array
    const highNum = Math.max(...numbers); //get highest number from numbers array
    for (const num of numbers){ //loop through numbers to check for proper data type and positive value
        if(typeof num != 'number' || num < 1){
            return 'ERROR';
        }    
    }
    if(lowNum === 1){
        return((highNum * (highNum + 1) / 2))//gauss sumation to get sum of numbers if lowNum is 1
    }else{
        return(((highNum - lowNum) + 1) * (highNum + lowNum) / 2);//modified gauss sumation to get sum if lowNum other than 1
    };   
};

// Do not edit below this line
module.exports = sumAll;
