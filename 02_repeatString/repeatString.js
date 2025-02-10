const repeatString = function(string, amount) {
    let text = '';
    if(amount < 0){
        return 'ERROR';
    }
    for(let i = 0; i < amount; i++){
        text += string;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
