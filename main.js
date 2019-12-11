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

        if(!action){
	// console.log('number key!');
	// if calculator shows 0, we wnat to replace the  calculators display with the textContent of the 
	// clicked key
	// If the calculator shows a non-zero number, we want to append the clicked key to the displayed number
	if(displayedNum === '0'){
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
	console.log('operator key!');
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
	console.log('equal key!');
}


	}
});

// if there is no  data-action attribute, then it must be a number key
// if(!action){
// 	console.log('number key!');
// }

// if(
// 	action === 'add' ||
// 	action === 'subtract' ||
// 	action === 'multiply' ||
// 	action ==='divide')
// {
// 	console.log('operator key!');
// }

// if(action === 'decimal'){
// 	console.log('decimal keys!')
// }

// if(action === 'clear'){
// 	console.log('clear key!');
// }

// if(action === 'calculate'){
// 	console.log('equal key!');
// }



