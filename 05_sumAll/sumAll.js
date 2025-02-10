const sumAll = function(a ,b) {
    let sum = 0;
    let small = 0;
    let large = 0;
    if (a < 0 || b < 0){
        return 'ERROR'
    }else if(!Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR'
    }else if (a > b){
        large = a;
        small = b;
    }else if (b > a){
        small = a;
        large = b;
    }

    for (let i = small; i <= large; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
