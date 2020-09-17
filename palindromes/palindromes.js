const palindromes = function(str) {
    // RegExp equivalent = /[^A-Za-z0–9];
    let re = /[\W_]/g;

    let lowStr = str.toLowerCase().replace(re,'');
    let reverseStr = lowStr.split('').reverse().join('');
    return lowStr === reverseStr;
}   

module.exports = palindromes
