const result = document.querySelector("#result");
const num1 = document.querySelector("#btn-num1");
const num2 = document.querySelector("#btn-num2");
const num3 = document.querySelector("#btn-num3");
const num4 = document.querySelector("#btn-num4");
const num5 = document.querySelector("#btn-num5");
const num6 = document.querySelector("#btn-num6");
const num7 = document.querySelector("#btn-num7");
const num8 = document.querySelector("#btn-num8");
const num9 = document.querySelector("#btn-num9");
const num0 = document.querySelector("#btn-num0");
const add = document.querySelector("#btn-add");
const substract = document.querySelector("#btn-substract");
const multiply = document.querySelector("#btn-multiply");
const divided = document.querySelector("#btn-divided");
const deleteBtn = document.querySelector("#btn-delete");
const ceBtn = document.querySelector("#btn-ce");
const cBtn = document.querySelector("#btn-c");
const equal = document.querySelector("#btn-equal");
const prevDisplay = document.querySelector("#prev-result");

let currNum = null;
let finalResult = null;
let prevOperator = null;
let hasEqual = false;
let tmpNum = null;

/*
  Function for calculated the operands
*/
function operate(result, operand, operator) {
  if (operator === "+") return result + operand;
  else if (operator === "-") return result - operand;
  else if (operator === "*") return result * operand;
  else if (operator === "/") return result / operand;
}

/*
  Function for simplified the hard code solution in every number
*/
function addNumber(event) {
  const number = event.target.value;
  if (result.textContent === "0" || currNum === null) {
    result.textContent = number;
    currNum = number;
  } else {
    result.textContent += number;
    currNum += number;
  }
}

function calcInOperator(event) {
  if (!hasEqual) {
    if (currNum !== null && finalResult !== null) {
      currNum = Number(currNum);
      finalResult = operate(finalResult, currNum, prevOperator);
    }

    if (finalResult === null) finalResult = Number(currNum);
    hasEqual = false;
  }

  currNum = null;
  prevOperator = event.target.value;
  result.textContent = finalResult;
  prevDisplay.textContent = `${finalResult} ${prevOperator}`;
}

/*
  EVENT HANDLING WHEN BUTTON CLICK !!
*/
num1.addEventListener("click", (event) => addNumber(event));
num2.addEventListener("click", (event) => addNumber(event));
num3.addEventListener("click", (event) => addNumber(event));
num4.addEventListener("click", (event) => addNumber(event));
num5.addEventListener("click", (event) => addNumber(event));
num6.addEventListener("click", (event) => addNumber(event));
num7.addEventListener("click", (event) => addNumber(event));
num8.addEventListener("click", (event) => addNumber(event));
num9.addEventListener("click", (event) => addNumber(event));
num0.addEventListener("click", (event) => addNumber(event));

/*
  EVENT HANDLING WHEN TWO OPERAND AND ONE OPERATOR MEET WITH OTHER OPERATOR WITH CLICK !!
*/
add.addEventListener("click", (event) => calcInOperator(event)); // ADD FUNCTION (+)
substract.addEventListener("click", (event) => calcInOperator(event)); // SUBSTRACT FUNCTION (-)
multiply.addEventListener("click", (event) => calcInOperator(event)); // MULTIPLY FUNCTION (*)
divided.addEventListener("click", (event) => calcInOperator(event)); // DIVIDED FUNCTION (/)

/*
  DEL FUNCTION
*/
deleteBtn.addEventListener("click", () => {
  if (currNum !== null && currNum !== "") {
    if (currNum.length === 1) currNum = "0";
    else {
      currNum = currNum.slice(0, -1);
    }
    result.textContent = currNum;
  }
});

/*
  CE FUNCTION
*/
ceBtn.addEventListener("click", () => {
  if (currNum !== null && currNum !== "") {
    currNum = "0";

    result.textContent = currNum;
  }
});

/*
  C FUNCTION
*/
cBtn.addEventListener("click", () => {
  // Global reset to default !!
  currNum = null;
  finalResult = null;
  prevOperator = null;
  hasEqual = false;
  tmpNum = null;
  result.textContent = "0";
  prevDisplay.textContent = ``;
});

/*
  EQUAL FUNCTION
*/
equal.addEventListener("click", () => {
  hasEqual = true;
  if (prevOperator === null) {
    // Do nothing !
  } else if (currNum === null) {
    currNum = Number(finalResult);
    tmpNum = finalResult;
    finalResult = operate(finalResult, currNum, prevOperator);
    result.textContent = finalResult;
    prevDisplay.textContent = `${tmpNum} ${prevOperator} ${currNum} =`;
  } else {
    currNum = Number(currNum);
    tmpNum = finalResult;
    finalResult = operate(finalResult, currNum, prevOperator);
    result.textContent = finalResult;
    prevDisplay.textContent = `${tmpNum} ${prevOperator} ${currNum} =`;
  }
});
