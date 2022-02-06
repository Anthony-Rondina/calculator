//grab DOM elements
let equalsBtn = document.querySelector("#equalsBtn")
let oneBtn = document.querySelector("#oneBtn")
let twoBtn = document.querySelector("#twoBtn")
let threeBtn = document.querySelector("#threeBtn")
let fourBtn = document.querySelector("#fourBtn")
let fiveBtn = document.querySelector("#fiveBtn")
let sixBtn = document.querySelector("#sixBtn")
let sevenBtn = document.querySelector("#sevenBtn")
let eightBtn = document.querySelector("#eightBtn")
let nineBtn = document.querySelector("#nineBtn")
let zeroBtn = document.querySelector("#zeroBtn")
let display = document.querySelector(".display")
let plusBtn = document.querySelector("#plusBtn")
let minusBtn = document.querySelector("#minusBtn")
let divideBtn = document.querySelector("#divideBtn")
let multiplyBtn = document.querySelector("#multiplyBtn")
let clearBtn = document.querySelector("#clearBtn")
let decimalBtn = document.querySelector("#decimalBtn")

display.value = 0
let decimal = false
//set operator conditions
let minus = false
let plus = false
let divide = false
let multiply = false

//Create first number object
let firstNumber = {
    value: '',
    saved: false
}
//Create second number object
let secondNumber = {
    value: '',
    saved: false
}
//Create total number object
let total = {
    value: '',
    saved: false
}

const assignNumbers = (e) => {
    console.log('saved status is ', firstNumber.saved)
    if (display.value == 0) {
        display.value = ''
    }
    if (display.value == firstNumber.value) {
        display.value = ''
    } else if (display.value == total) {
        display.value = ''
    }
    switch (e.target.id) {
        case 'decimalBtn':
            if (!firstNumber.saved) {
                if (decimal) {
                    display.value = parseFloat(firstNumber.value)
                } else {
                    decimal = true
                    firstNumber.value += "."
                    console.log(firstNumber.value)
                    display.value += parseFloat(firstNumber.value)
                }
            } else {
                if (decimal) {
                    display.value = parseFloat(secondNumber.value)
                    console.log('test')
                } else {
                    decimal = true
                    secondNumber.value += "."
                    console.log(secondNumber.value)
                    display.value = parseFloat(secondNumber.value)
                    console.log(display.value)
                }
            }
            break;
        case 'zeroBtn':
            if (!firstNumber.saved) {
                firstNumber.value += "0"
                display.value = firstNumber.value
                console.log(firstNumber.value)
            } else {
                secondNumber.value += '0'
                display.value += "0"
            }
            break;
        case 'oneBtn':
            if (!firstNumber.saved) {
                firstNumber.value += "1"
                display.value = firstNumber.value
                console.log(firstNumber.value)
            } else {
                secondNumber.value += '1'
                display.value += "1"
            }
            break;
        case "twoBtn":
            if (!firstNumber.saved) {
                firstNumber.value += "2"
                display.value = firstNumber.value
                console.log(firstNumber.value)
            } else {
                secondNumber.value += '2'
                display.value += "2"
            }
            break;
        case "threeBtn":
            if (!firstNumber.saved) {
                firstNumber.value += "3"
                display.value = firstNumber.value
                console.log(firstNumber.value)
            } else {
                secondNumber.value += '3'
                display.value += "3"
            }
            break;
        case "fourBtn":
            if (!firstNumber.saved) {
                firstNumber.value += "4"
                display.value = firstNumber.value
                console.log(firstNumber.value)
            } else {
                secondNumber.value += '4'
                display.value += "4"
            }
            break;
        case "fiveBtn":
            if (!firstNumber.saved) {
                firstNumber.value += "5"
                display.value = firstNumber.value
                console.log(firstNumber.value)
            } else {
                secondNumber.value += '5'
                display.value += "5"
            }
            break;
        case "sixBtn":
            if (!firstNumber.saved) {
                firstNumber.value += "6"
                display.value = firstNumber.value
                console.log(firstNumber.value)
            } else {
                secondNumber.value += '6'
                display.value += "6"
            }
            break;
        case "sevenBtn":
            if (!firstNumber.saved) {
                firstNumber.value += "7"
                display.value = firstNumber.value
                console.log(firstNumber.value)
            } else {
                secondNumber.value += '7'
                display.value += "7"
            }
            break;
        case "eightBtn":
            if (!firstNumber.saved) {
                firstNumber.value += "8"
                display.value = firstNumber.value
                console.log(firstNumber.value)
            } else {
                secondNumber.value += '8'
                display.value += "8"
            }
            break;
        case "nineBtn":
            if (!firstNumber.saved) {
                firstNumber.value += "9"
                display.value = firstNumber.value
                console.log(firstNumber.value)
            } else {
                secondNumber.value += '9'
                display.value += "9"
            }
            break;
    }
}

const operator = (e) => {
    if (plus || minus || divide || multiply) {
        calculate()
    }
    switch (e.target.id) {
        case "plusBtn":
            plus = true
            if (!firstNumber.saved) {
                firstNumber.saved = true
                console.log("first is", firstNumber.saved, firstNumber.value)
                decimal = false
            } else {
                calculate()
                plus = true
            }
            decimal = false
            break;
        case "minusBtn":
            minus = true
            if (!firstNumber.saved) {
                firstNumber.saved = true
                console.log("first is", firstNumber.saved, firstNumber.value)
                decimal = false
            } else {
                calculate()
                minus = true
            }
            decimal = false
            break;
        case "multiplyBtn":
            multiply = true
            if (!firstNumber.saved) {
                firstNumber.saved = true
                console.log("first is", firstNumber.saved, firstNumber.value)
                decimal = false
            } else {
                calculate()
                multiply = true
            }
            decimal = false
            break;
        case "divideBtn":
            divide = true
            if (!firstNumber.saved) {
                firstNumber.saved = true
                console.log("first is", firstNumber.saved, firstNumber.value)
                decimal = false
            } else {
                calculate()
                divide = true
            }
            decimal = false
            break;
    }
}

const calculate = () => {
    console.log('plus is', plus, 'minus is', minus, 'divide is', divide, 'multiply is', multiply)
    if (plus) {
        if (firstNumber.saved) {
            if (firstNumber.value % 1 != 0 || display.value % 1 != 0) {
                console.log("decimal")
                console.log(firstNumber.value, secondNumber.value)
                total = parseFloat(firstNumber.value) + parseFloat(secondNumber.value)
                display.value = total.toFixed(2)
                firstNumber.value = total
                minus = false
                plus = false
                divide = false
                multiply = false
            } else {
                console.log('no decimal')
                console.log(firstNumber.value, secondNumber.value)
                total = parseInt(firstNumber.value) + parseInt(secondNumber.value)
                display.value = total
                firstNumber.value = total
                console.log(total)
                minus = false
                plus = false
                divide = false
                multiply = false
            }
            console.log("first is", firstNumber.saved, firstNumber.value)
        }
        decimal = false
        secondNumber.value = 0
    } else if (minus) {
        if (firstNumber.saved) {
            if (firstNumber.value % 1 != 0 || display.value % 1 != 0) {
                console.log("decimal")
                console.log(firstNumber.value, secondNumber.value)
                total = parseFloat(firstNumber.value) - parseFloat(secondNumber.value)
                display.value = total.toFixed(2)
                firstNumber.value = total
                minus = false
                plus = false
                divide = false
                multiply = false
            } else {
                console.log('no decimal')
                console.log(firstNumber.value, secondNumber.value)
                total = parseInt(firstNumber.value) - parseInt(secondNumber.value)
                display.value = total
                firstNumber.value = total
                console.log(total)
                minus = false
                plus = false
                divide = false
                multiply = false
            }
            console.log("first is", firstNumber.saved, firstNumber.value)
        }
        decimal = false
        secondNumber.value = 0
    } else if (divide) {
        if (firstNumber.saved) {
            if (firstNumber.value % 1 != 0 || display.value % 1 != 0) {
                console.log("decimal")
                console.log(firstNumber.value, secondNumber.value)
                total = parseFloat(firstNumber.value) / parseFloat(secondNumber.value)
                display.value = total.toFixed(2)
                firstNumber.value = total
                minus = false
                plus = false
                divide = false
                multiply = false
            } else {
                console.log('no decimal')
                console.log(firstNumber.value, secondNumber.value)
                total = parseInt(firstNumber.value) / parseInt(secondNumber.value)
                display.value = total
                firstNumber.value = total
                console.log(total)
                minus = false
                plus = false
                divide = false
                multiply = false
            }
            console.log("first is", firstNumber.saved, firstNumber.value)
        }
        decimal = false
        secondNumber.value = 0
    } else if (multiply) {
        if (firstNumber.saved) {
            if (firstNumber.value % 1 != 0 || display.value % 1 != 0) {
                console.log("decimal")
                console.log(firstNumber.value, secondNumber.value)
                total = parseFloat(firstNumber.value) * parseFloat(secondNumber.value)
                display.value = total.toFixed(2)
                firstNumber.value = total
                minus = false
                plus = false
                divide = false
                multiply = false
            } else {
                console.log('no decimal')
                console.log(firstNumber.value, secondNumber.value)
                total = parseInt(firstNumber.value) * parseInt(secondNumber.value)
                display.value = total
                firstNumber.value = total
                console.log(total)
                minus = false
                plus = false
                divide = false
                multiply = false
            }
            console.log("first is", firstNumber.saved, firstNumber.value)
        }
        decimal = false
        secondNumber.value = 0
    }
}
let toggle = 0
const clear = () => {
    minus = false
    plus = false
    divide = false
    multiply = false
    firstNumber.value = ''
    secondNumber.value = ''
    firstNumber.saved = false
    secondNumber.saved = false
    display.value = 0
    clearBtn.textContent = "AC"
    toggle = 0
    // }
}
//make button links
oneBtn.onclick = assignNumbers
twoBtn.onclick = assignNumbers
threeBtn.onclick = assignNumbers
fourBtn.onclick = assignNumbers
fiveBtn.onclick = assignNumbers
sixBtn.onclick = assignNumbers
sevenBtn.onclick = assignNumbers
eightBtn.onclick = assignNumbers
nineBtn.onclick = assignNumbers
zeroBtn.onclick = assignNumbers
decimalBtn.onclick = assignNumbers
plusBtn.onclick = operator
minusBtn.onclick = operator
divideBtn.onclick = operator
multiplyBtn.onclick = operator
equalsBtn.onclick = calculate
clearBtn.onclick = clear