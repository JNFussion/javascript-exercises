const removeFromArray = function(array,... numRemove) {

    for(let i = 0; i < numRemove.length; i++){
        for(let j = 0; j < array.length; j++){
            if(numRemove[i] === array[j]){
                array.splice(j, 1);
            }
        }
    }

    return array;
}

module.exports = removeFromArray
