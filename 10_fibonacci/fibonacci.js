const fibonacci = function(fibonacciNumIndex) {
    if (fibonacciNumIndex < 0){
        return 'OOPS';
    }
    let fNumSequence = [1,0,0];
    while(fibonacciNumIndex > 0){
        fibonacciNumIndex--;
        fNumSequence[2] = fNumSequence[0] + fNumSequence[1];
        fNumSequence[0] = fNumSequence[1];
        fNumSequence[1] = fNumSequence[2];
    }
    return fNumSequence[2];
};

// Do not edit below this line
module.exports = fibonacci;
