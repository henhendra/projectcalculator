const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const number = document.querySelectorAll(".number")

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.foreach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators =document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculatorOperator === '') {
        calculatorOperator = operator
    } else {
        calculatorOperator += operator
    }
}