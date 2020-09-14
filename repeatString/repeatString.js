const repeatString = function(input, number) {
    if(number < 0){
        return "ERROR";
    }
    
    let result = "";
    for(let i = 0; i<number; i++){
        result+= input;
    }
    return result;
}

module.exports = repeatString
