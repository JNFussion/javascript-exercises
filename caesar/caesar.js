const caesar = function(str, offset){
    let code = "";
    
    if(offset<0){
        offset = 26 + offset;
    }

    for(let i = 0; i< str.length; i++){

        if(isLetter(str.charAt(i))){
            if(isMayus(str.charAt(i))){
                let value = str.charCodeAt(i) - 65;
                let valueResult = (value + offset) % 26;
                code += String.fromCharCode(65 + valueResult);
                //console.log("mayus", value, valueResult,code);
            }else{
                let value = str.charCodeAt(i) - 97;
                let valueResult = (value + offset) % 26;
                code += String.fromCharCode( 97 + valueResult);
                //console.log("minus", value, valueResult,code);
            }
        }else{
            code+= str.charAt(i);
            
        }
    }

    return code;
};



function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i);
}
function isMayus(str){
    return str === str.toUpperCase();
}

module.exports = caesar
