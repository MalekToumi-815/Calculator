//declaring operation variable
let number1 = 0,number2 = 0
let opr = ""
let res = ""
let clear = false
//array with number buttons
const numbers = document.querySelectorAll(".number")
//array with operator buttons
const operators = document.querySelectorAll(".operator")
//selecting the dispaly
const display = document.querySelector("#display")
//reacting to a button click
numbers.forEach(number => {
    number.addEventListener("click", () => {
      if (clear) {
        display.textContent = "";    
        clear = false;
      }
      if (display.textContent.length < 9)
        display.textContent += number.value;
    });
  });
//clearing function
operators[operators.length-2].addEventListener("click",()=>{display.textContent="";opr="";number1=0;number2=0})
//operator button logic
function operation(operator){
    if (opr == ""){
        if (display.textContent != "")
        number1 = Number(display.textContent)
        display.textContent = ""
        opr = operator
    }
    else{
        if (display.textContent != "")
        number2 = Number(display.textContent)
        switch (opr) {
            case "+":
                res = `${(number1+number2)}`
                break;
            case "*":
                res = `${(number1*number2)}`
                break;
            case "-":
                res = `${(number1-number2)}`
                break;
            case "/":
                if (number2 == 0){
                    res = "Error"
                    number1=0;
                    number2=0
                }else
                    res = `${(number1/number2)}`
                break;
            default:
                break;
        }
        if (res.length>9)
        res = Number(res).toPrecision(8).toString()
        if (res != "Error")
        number1 = Number(res);
        display.textContent = res
        opr = operator
        clear = true
    }
}
for (let i = 0;i<4;i++)
    operators[i].addEventListener("click",()=>operation(operators[i].value))
//result button logic
function result(){
    if (display.textContent != "")
        number2 = Number(display.textContent)
    switch (opr) {
        case "+":
            res = `${(number1+number2)}`
            break;
        case "*":
            res = `${(number1*number2)}`
            break;
        case "-":
            res = `${(number1-number2)}`
            break;
        case "/":
            if (number2 == 0){
                res = "Error"
                number1=0;
                number2=0
            }else
                res = `${(number1/number2)}`
            break;
        default:
            break;
    }
    if (res.length>9)
    res = Number(res).toPrecision(5).toString()
    if (res != "Error")
    number1 = Number(res)
    display.textContent = res
    clear = true
    opr = ""
}
operators[operators.length-1].addEventListener("click",()=>result())