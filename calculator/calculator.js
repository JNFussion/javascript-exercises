function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	let sum = 0;
	for(let i = 0; i< array.length; i++){
		sum += array[i];
	}
	return sum;
}

function multiply (array) {
	let total = 1;
	
	for(let i = 0; i< array.length; i++){
		total *= array[i];
	}
	
	return total;
}

function power(a, b) {
	return a ** b;
}

function factorial(numb) {
	if(numb === 0){
		return 1;
	}else{
		return numb * factorial(numb-1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}