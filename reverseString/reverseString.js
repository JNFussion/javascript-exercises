const reverseString = function(input) {
    let result = "";
    for(let i = input.length;i >= 0; i-- ){
        result += input.charAt(i);
    }

    return result;
}

module.exports = reverseString
