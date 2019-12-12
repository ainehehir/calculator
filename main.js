 const calculator = document.querySelector('.calculator');
 const display = document.querySelector('.calculator__display');
 const keys = calculator.querySelector('.calculator__keys');
 
// listen for all key presses
// determines what type of key is clicked based on the data-action attribute
keys.addEventListener('click', e => {
	if(e.target.matches('button')){
		const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;


        Array.from(key.parentNode.children)
        		.forEach( k => k.classList.remove('is-depressed'));

        if(!action){
	// console.log('number key!');
	// if calculator shows 0, we wnat to replace the  calculators display with the textContent of the 
	// clicked key
	// If the calculator shows a non-zero number, we want to append the clicked key to the displayed number
	if(displayedNum === '0' || previousKeyType === 'operator'){
		display.textContent = keyContent;
	} else {
		display.textContent = displayedNum + keyContent;
	}
}

if(
	action === 'add' ||
	action === 'subtract' ||
	action === 'multiply' ||
	action ==='divide')
{
	// console.log('operator key!');
	key.classList.add('is-depressed');
	calculator.dataset.previousKeyType = 'operator';
	calculator.dataset.firstValue = displayedNum;
	calculator.dataset.operator = action;
}

if(action === 'decimal'){
	// console.log('decimal keys!')
	// concatenate . to the displayed number
	display.textContent = displayedNum + '.';
}

if(action === 'clear'){
	console.log('clear key!');
}

if(action === 'calculate'){
	const firstValue = calculator.dataset.firstValue;
	const operator = calculator.dataset.operator;
	const secondValue = displayedNum;

	display.textContent = calculate(firstValue, operator, secondValue);
}


	}
});


const calculate = (n1, operator, n2) =>{

	let result = '';

	if(operator === 'add'){
		result = parseFloat(n1) + parseFloat(n2);
	} else if(operator === 'subtract'){
		result = parseFloat(n1) - parseFloat(n2);
	} else if(operator === 'multiply'){
		result = parseFloat(n1) * parseFloat(n2);
	} else if(operator === 'divide'){
		result = parseFloat(n1)/parseFloat(n2);
	}
	return result;
}



