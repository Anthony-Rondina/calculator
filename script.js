
//creating variables
let previousNumber = ''
let currentNumber = ''
let operation = undefined

//function that clears the display and sets values to starting points
const clearDisplay = () => {
    previousNumber = ''
    currentNumber = ''
    previousNumberText.textContent = previousNumber
    currentNumberText.textContent = currentNumber
    operation = undefined
}

//declaring DOM elements
const previousNumberText = document.querySelector('.previousNumber')
const currentNumberText = document.querySelector('.currentNumber')

//starting webpage by clearing display
clearDisplay()

// function that takes the operation variable and performs the following math
const calculate = () => {
    let total
    const prev = parseFloat(previousNumber)
    const curr = parseFloat(currentNumber)
    if (isNaN(prev) || isNaN(curr)) return
    switch (operation) {
        case '+':
            total = prev + curr
            break;
        case '-':
            total = prev - curr
            break;

        case '÷':
            total = prev / curr
            break;

        case '*':
            total = prev * curr
            break;
        default:
            return
    }
    //switching values to continue
    currentNumber = total
    operation = undefined
    previousNumber = ''
}

//function that updates the numbers no the display
const setDisplay = () => {
    currentNumberText.innerText = currentNumber
    previousNumberText.innerText = previousNumber
    if (operation != null) {
        previousNumberText.innerText = `${previousNumber} ${operation}`
    }
}

//function that removes the last number in a string
const deleteNumber = () => {
    currentNumber = currentNumber.toString().slice(0, -1)
}

//appends the number to the currentNumber variable
const appendNumber = (number) => {
    if (number === '.' && currentNumber.includes('.')) return
    currentNumber = currentNumber.toString() + number.toString()
}

// decides which operation to use
const decideOperation = (choice) => {
    //if statement to cancel function if no value
    if (currentNumber === '') return
    //if statement to calculate if previousNumber
    if (previousNumber !== '') {
        calculate()
    }
    //switching values to continue
    operation = choice
    previousNumber = currentNumber
    currentNumber = ''
}

//creating DOM elements
const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operation")
const equalsBtn = document.querySelector('.equals')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.deleteBtn')

// adds event listener for when you click a number
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText)
        setDisplay()
    })
})

// adds event listener for when you click an operation
operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        decideOperation(button.innerText)
        setDisplay()
    })
})

// adds event listener for when you click equals
equalsBtn.addEventListener('click', button => {
    calculate()
    setDisplay()
})

// adds event listener for when you click clear
clearBtn.addEventListener('click', button => {
    clearDisplay()
    setDisplay()
})

// adds event listener for when you click delete
deleteBtn.addEventListener('click', button => {
    deleteNumber()
    setDisplay()
})
