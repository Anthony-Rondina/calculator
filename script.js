
let previousNumber = ''
let currentNumber = ''
let operation = undefined

const clearDisplay = () => {
    previousNumber = ''
    currentNumber = ''
    previousNumberText.textContent = previousNumber
    currentNumberText.textContent = currentNumber
    operation = undefined
}
const previousNumberText = document.querySelector('.previousNumber')
const currentNumberText = document.querySelector('.currentNumber')
clearDisplay()
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
    currentNumber = total
    operation = undefined
    previousNumber = ''
}
const setDisplay = () => {
    currentNumberText.innerText = currentNumber
    previousNumberText.innerText = previousNumber
    if (operation != null) {
        previousNumberText.innerText = `${previousNumber} ${operation}`
    }
}

const deleteNumber = () => {
    currentNumber = currentNumber.toString().slice(0, -1)
}

const appendNumber = (number) => {
    if (number === '.' && currentNumber.includes('.')) return
    currentNumber = currentNumber.toString() + number.toString()
}

const decideOperation = (choice) => {
    if (currentNumber === '') return
    if (previousNumber !== '') {
        calculate()
    }
    operation = choice
    previousNumber = currentNumber
    currentNumber = ''
}

const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operation")
const equalsBtn = document.querySelector('.equals')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.deleteBtn')


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText)
        setDisplay()
    })
})

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        decideOperation(button.innerText)
        setDisplay()
    })
})

equalsBtn.addEventListener('click', button => {
    calculate()
    setDisplay()
})

clearBtn.addEventListener('click', button => {
    clearDisplay()
    setDisplay()
})

deleteBtn.addEventListener('click', button => {
    deleteNumber()
    setDisplay()
})
