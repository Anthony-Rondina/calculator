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

display.textContent = 0
let proceed = false
let decimal = false
//set operator conditions
let minus = false
let plus = false
let divide = false
let multiply = false

//Create first number object
let firstNumber = {
    value: '',
    used: false
}
//Create second number object
let secondNumber = {
    value: '',
    used: false
}
//Create third number object
let thirdNumber = {
    value: '',
    used: false
}
//Create total number object
let total = {
    value: '',
    used: false
}

const assignNumbers = (e) => {
    if (display.textContent == 0) {
        display.textContent = ''
    }
    if (display.textContent == firstNumber.value) {
        display.textContent = ''
    } else if (display.textContent == secondNumber.value) {
        display.textContent = ''
    } else if (display.textContent == total) {
        display.textContent = ''
    }

    switch (e.target.id) {
        case 'decimalBtn':
            if (!firstNumber.used) {
                if (decimal) {
                    display.textContent = firstNumber.value
                } else {
                    firstNumber.value += "."
                    decimal = true
                    display.textContent += firstNumber.value
                }
            } else if (!secondNumber.used) {
                if (decimal) {
                    display.textContent = firstNumber.value
                } else {
                    decimal = true
                    secondNumber.value += "."
                    display.textContent += secondNumber.value
                }
            } else if (thirdNumber.used) {
                if (decimal) {
                    display.textContent = firstNumber.value
                } else {
                    decimal = true
                    thirdNumber.value += "."
                    display.textContent += "."
                    console.log(thirdNumber.value)
                }
            }
            break;
        case 'zeroBtn':
            if (!firstNumber.used) {
                firstNumber.value += "0"
                display.textContent += firstNumber.value
            } else if (!secondNumber.used) {
                secondNumber.value += "0"
                display.textContent += secondNumber.value
            } else if (thirdNumber.used) {
                thirdNumber.value += "0"
                display.textContent += 0
                console.log(thirdNumber.value)
            }
            break;
        case 'oneBtn':
            if (!firstNumber.used) {
                firstNumber.value += "1"
                display.textContent = firstNumber.value
            } else if (!secondNumber.used) {
                secondNumber.value += "1"
                display.textContent += secondNumber.value
            } else if (thirdNumber.used) {
                thirdNumber.value += "1"
                display.textContent += 1
                console.log(thirdNumber.value)

            }
            break;
        case "twoBtn":
            if (!firstNumber.used) {
                firstNumber.value += "2"
                display.textContent += firstNumber.value
            } else if (!secondNumber.used) {
                secondNumber.value += "2"
                display.textContent += secondNumber.value
            } else if (thirdNumber.used) {
                thirdNumber.value += "2"
                display.textContent += 2
                console.log(thirdNumber.value)

            }
            break;
        case "threeBtn":
            if (!firstNumber.used) {
                firstNumber.value += "3"
                display.textContent += firstNumber.value
            } else if (!secondNumber.used) {
                secondNumber.value += "3"
                display.textContent += secondNumber.value
            } else if (thirdNumber.used) {
                thirdNumber.value += "3"
                display.textContent += 3
                console.log(thirdNumber.value)

            }
            break;
        case "fourBtn":
            if (!firstNumber.used) {
                firstNumber.value += "4"
                display.textContent += firstNumber.value
            } else if (!secondNumber.used) {
                secondNumber.value += "4"
                display.textContent += secondNumber.value
            } else if (thirdNumber.used) {
                thirdNumber.value += "4"
                display.textContent += 4
                console.log(thirdNumber.value)

            }
            break;
        case "fiveBtn":
            if (!firstNumber.used) {
                firstNumber.value += "5"
                display.textContent += firstNumber.value
            } else if (!secondNumber.used) {
                secondNumber.value += "5"
                display.textContent += secondNumber.value
            } else if (thirdNumber.used) {
                thirdNumber.value += "5"
                display.textContent += 5
                console.log(thirdNumber.value)

            }
            break;
        case "sixBtn":
            if (!firstNumber.used) {
                firstNumber.value += "6"
                display.textContent += firstNumber.value
            } else if (!secondNumber.used) {
                secondNumber.value += "6"
                display.textContent += secondNumber.value
            } else if (thirdNumber.used) {
                thirdNumber.value += "6"
                display.textContent += 6
                console.log(thirdNumber.value)

            }
            break;
        case "sevenBtn":
            if (!firstNumber.used) {
                firstNumber.value += "7"
                display.textContent += firstNumber.value
            } else if (!secondNumber.used) {
                secondNumber.value += "7"
                display.textContent += secondNumber.value
            } else if (thirdNumber.used) {
                thirdNumber.value += "7"
                display.textContent += 7
                console.log(thirdNumber.value)

            }
            break;
        case "eightBtn":
            if (!firstNumber.used) {
                firstNumber.value += "8"
                display.textContent += firstNumber.value
            } else if (!secondNumber.used) {
                secondNumber.value += "8"
                display.textContent += secondNumber.value
            } else if (thirdNumber.used) {
                thirdNumber.value += "8"
                display.textContent += 8
                console.log(thirdNumber.value)

            }
            break;
        case "nineBtn":
            if (!firstNumber.used) {
                firstNumber.value += "9"
                display.textContent += firstNumber.value
            } else if (!secondNumber.used) {
                secondNumber.value += "9"
                display.textContent += secondNumber.value
            } else if (thirdNumber.used) {
                thirdNumber.value += "9"
                display.textContent += 9
                console.log(thirdNumber.value)

            }
            break;
    }
}

const operator = (e) => {
    switch (e.target.id) {
        case "plusBtn":
            plus = true
            proceed = true
            if (!firstNumber.used) {
                firstNumber.used = true
                console.log("first is", firstNumber.used)
                decimal = false
            } else if (!secondNumber.used) {
                secondNumber.used = true
                console.log("second is", secondNumber.used)
                decimal = false

            } else {
                thirdNumber.used = true
                console.log("third is", thirdNumber.used)
            }
            break;
        case "minusBtn":
            minus = true
            proceed = true
            if (!firstNumber.used) {
                firstNumber.used = true
            } else if (!secondNumber.used) {
                secondNumber.used = true
            } else {
                thirdNumber.used = true
            } break;
        case "multiplyBtn":
            multiply = true
            proceed = true
            if (!firstNumber.used) {
                firstNumber.used = true
            } else if (!secondNumber.used) {
                secondNumber.used = true
            } else {
                thirdNumber.used = true
            } break;
        case "divideBtn":
            divide = true
            proceed = true
            if (!firstNumber.used) {
                firstNumber.used = true
            } else if (!secondNumber.used) {
                secondNumber.used = true
            } else {
                thirdNumber.used = true
            } break;
    }
}

const calculate = () => {
    if (plus) {
        if (!thirdNumber.used) {
            if (decimal) {
                console.log("decimal")
                console.log(firstNumber.value, secondNumber.value)
                total = parseFloat(firstNumber.value) + parseFloat(secondNumber.value)
                secondNumber.used = true
                console.log("second is", secondNumber.used)
                display.textContent = total
                minus = false
                plus = false
                divide = false
                multiply = false
            } else {
                console.log('no decimal')
                total = parseInt(firstNumber.value) + parseInt(secondNumber.value)
                secondNumber.used = true
                console.log("second is", secondNumber.used)
                display.textContent = total
                minus = false
                plus = false
                divide = false
                multiply = false
            }
        } else {
            if (decimal) {
                total = parseFloat(total) + parseFloat(thirdNumber.value)
                display.textContent = total
                minus = false
                plus = false
                divide = false
                multiply = false
                thirdNumber.value = ''
                thirdNumber.used = false
            } else {
                total = parseInt(total) + parseInt(thirdNumber.value)
                display.textContent = total
                minus = false
                plus = false
                divide = false
                multiply = false
                thirdNumber.value = ''
                thirdNumber.used = false
            }
        }
        decimal = false
    } else if (minus) {
        if (!thirdNumber.used) {
            total = parseInt(firstNumber.value) - parseInt(secondNumber.value)
            secondNumber.used = true
            console.log("second is", secondNumber.used)
            display.textContent = total
            minus = false
            plus = false
            divide = false
            multiply = false
        } else {
            total = parseInt(total) - parseInt(thirdNumber.value)
            display.textContent = total
            minus = false
            plus = false
            divide = false
            multiply = false
            thirdNumber.value = ''
            thirdNumber.used = false
        }
    } else if (divide) {
        if (!thirdNumber.used) {
            total = parseInt(firstNumber.value) / parseInt(secondNumber.value)
            secondNumber.used = true
            console.log("second is", secondNumber.used)
            display.textContent = total
            minus = false
            plus = false
            divide = false
            multiply = false
        } else {
            total = parseInt(total) / parseInt(thirdNumber.value)
            display.textContent = total
            minus = false
            plus = false
            divide = false
            multiply = false
            thirdNumber.value = ''
            thirdNumber.used = false
        }
    } else if (multiply) {
        if (!thirdNumber.used) {
            total = parseInt(firstNumber.value) * parseInt(secondNumber.value)
            secondNumber.used = true
            console.log("second is", secondNumber.used)
            display.textContent = total
            minus = false
            plus = false
            divide = false
            multiply = false
        } else {
            total = parseInt(total) * parseInt(thirdNumber.value)
            display.textContent = total
            minus = false
            plus = false
            divide = false
            multiply = false
            thirdNumber.value = ''
            thirdNumber.used = false
        }
    }
}
let toggle = 0
const clear = () => {
    if (toggle === 0) {
        if (!firstNumber.used) {
            firstNumber.value = ''
        } else if (!secondNumber.value) {
            secondNumber.value = ''
        } else {
            thirdNumber.value = ''
        }
        display.textContent = 0
        toggle++
        clearBtn.textContent = "AC"
    } else {
        minus = false
        plus = false
        divide = false
        multiply = false
        firstNumber.value = ''
        secondNumber.value = ''
        thirdNumber.value = ''
        firstNumber.used = false
        secondNumber.used = false
        thirdNumber.used = false
        display.textContent = 0
        clearBtn.textContent = "C"
        toggle = 0
    }
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