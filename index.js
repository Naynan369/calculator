const screenDisplay = document.querySelector('.little-screen')
const buttons = document.querySelectorAll('button')
const activeClear = document.querySelector('#clear')
let calculation = []
let numberCalculator;

const calculate = (button) => {
    const value = button.textContent
    
    if(value === "AC"){
        calculation = []
        screenDisplay.textContent = '0'
    }else if(value === "="){
        screenDisplay.textContent = eval(numberCalculator)
    }else if(value === "%"){
        screenDisplay.textContent = eval(numberCalculator/100)
    }
    else{
        calculation.push(value)
        numberCalculator = calculation.join('')
        screenDisplay.textContent = numberCalculator
    }

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))