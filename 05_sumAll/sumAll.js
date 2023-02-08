

const sumAll = function(...numbers){

    const lowNum = Math.min(...numbers);
    const highNum = Math.max(...numbers);

    for (const num of numbers){
        if(typeof num != 'number' || num < 1){
            console.log('ERROR');
            return 'ERROR';
        }    
    }
    
    if(lowNum === 1){
        return((highNum * (highNum + 1) / 2))
    }else{
    return(Math.floor(((highNum - lowNum) + 1) * (highNum + lowNum) / 2));
    };   
};

console.log(sumAll(20, 35));

// Do not edit below this line
module.exports = sumAll;
