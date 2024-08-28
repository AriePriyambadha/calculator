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

let currNum = null;
let finalResult = null;
let prevOperator = null;

function operate(result, operand, operator) {
  if (operator === "+") return result + operand;
  else if (operator === "-") return result - operand;
  else if (operator === "*") return result * operand;
  else if (operator === "/") return result / operand;
}

/*
  EVENT HANDLING WHEN BUTTON CLICK !!
*/
num1.addEventListener("click", () => {
  if (result.textContent === "0" || currNum === null) {
    result.textContent = "1";
    currNum = "1";
  } else {
    result.textContent += "1";
    currNum += "1";
  }
});

num2.addEventListener("click", () => {
  if (result.textContent === "0" || currNum === null) {
    result.textContent = "2";
    currNum = "2";
  } else {
    result.textContent += "2";
    currNum += "2";
  }
});

num3.addEventListener("click", () => {
  if (result.textContent === "0" || currNum === null) {
    result.textContent = "3";
    currNum = "3";
  } else {
    result.textContent += "3";
    currNum += "3";
  }
});

num4.addEventListener("click", () => {
  if (result.textContent === "0" || currNum === null) {
    result.textContent = "4";
    currNum = "4";
  } else {
    result.textContent += "4";
    currNum += "4";
  }
});

num5.addEventListener("click", () => {
  if (result.textContent === "0" || currNum === null) {
    result.textContent = "5";
    currNum = "5";
  } else {
    result.textContent += "5";
    currNum += "5";
  }
});

num6.addEventListener("click", () => {
  if (result.textContent === "0" || currNum === null) {
    result.textContent = "6";
    currNum = "6";
  } else {
    result.textContent += "6";
    currNum += "6";
  }
});

num7.addEventListener("click", () => {
  if (result.textContent === "0" || currNum === null) {
    result.textContent = "7";
    currNum = "7";
  } else {
    result.textContent += "7";
    currNum += "7";
  }
});

num8.addEventListener("click", () => {
  if (result.textContent === "0" || currNum === null) {
    result.textContent = "8";
    currNum = "8";
  } else {
    result.textContent += "8";
    currNum += "8";
  }
});

num9.addEventListener("click", () => {
  if (result.textContent === "0" || currNum === null) {
    result.textContent = "9";
    currNum = "9";
  } else {
    result.textContent += "9";
    currNum += "9";
  }
});

num0.addEventListener("click", () => {
  if (result.textContent === "0" || currNum === null) {
    result.textContent = "0";
    currNum = "0";
  } else {
    result.textContent += "0";
    currNum += "0";
  }
});

/*
  ADD FUNCTION (+)
*/
add.addEventListener("click", () => {
  if (currNum !== null && finalResult !== null) {
    currNum = Number(currNum);
    finalResult = operate(finalResult, currNum, prevOperator);
  }

  if (finalResult === null) finalResult = Number(currNum);

  currNum = null;
  prevOperator = "+";
  result.textContent = finalResult;
});

/*
  SUBSTRACT FUNCTION (-)
*/
substract.addEventListener("click", () => {
  if (currNum !== null && finalResult !== null) {
    currNum = Number(currNum);
    finalResult = operate(finalResult, currNum, prevOperator);
  }

  if (finalResult === null) finalResult = Number(currNum);

  currNum = null;
  prevOperator = "-";
  result.textContent = finalResult;
});

/*
  MULTIPLY FUNCTION (*)
*/
multiply.addEventListener("click", () => {
  if (currNum !== null && finalResult !== null) {
    currNum = Number(currNum);
    finalResult = operate(finalResult, currNum, prevOperator);
  }

  if (finalResult === null) finalResult = Number(currNum);

  currNum = null;
  prevOperator = "*";
  result.textContent = finalResult;
});

/*
  DIVIDED FUNCTION (/)
*/
divided.addEventListener("click", () => {
  if (currNum !== null && finalResult !== null) {
    currNum = Number(currNum);
    finalResult = operate(finalResult, currNum, prevOperator);
  }

  if (finalResult === null) finalResult = Number(currNum);

  currNum = null;
  prevOperator = "/";
  result.textContent = finalResult;
});

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
