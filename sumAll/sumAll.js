const sumAll = function(start, end) {
    let result = 0;
    
    if(typeof start != "number" || typeof end != "number"){
        return "ERROR";

    } else if (start < 0 || end < 0){
        return "ERROR";

    } else if(start > end ){
        let aux = start;
        start = end;
        end = aux;
    }
    
    
    for(let i = start; i <= end; i++){
        result += i;
    }

    return result;
}

module.exports = sumAll
