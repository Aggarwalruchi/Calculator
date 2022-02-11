//code here
var num1, calc;
//my variables for input field
const ans_text = document.getElementById("ans-text");
const input_field = document.getElementById("input-field");

//variables for all buttons
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnDot = document.getElementById("btn.");
const btnAC = document.getElementById("btnAC");
const btnC = document.getElementById("btnC");
const btnBack = document.getElementById("btnBack");
const btnAdd = document.getElementById("btn+");
const btnSub = document.getElementById("btn-");
const btnMultiply = document.getElementById("btnX");
const btnDiv = document.getElementById("btn/");
const btnEqual = document.getElementById("btn=");

//Initiate or assigning value of input fields
btnAC.innerText = "OFF"
input_field.value = 0;
ans_text.innerHTML = "";

// On Off button
function OnOff() {
    if (btnAC.innerText == "OFF") {
        btnAC.innerText = "ON"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn6.disabled = true
        btn7.disabled = true
        btn8.disabled = true
        btn9.disabled = true
        btn0.disabled = true
        btnC.disabled = true
        btnBack.disabled = true
        btnAdd.disabled = true
        btnSub.disabled = true
        btnMultiply.disabled = true
        btnDiv.disabled = true
        btnEqual.disabled = true
        btnDot.disabled = true
        input_field.value = ""
        ans_text.innerText = "";

    } else {
        btnAC.innerText = "OFF"
        btn1.disabled = false
        btn2.disabled = false
        btn3.disabled = false
        btn4.disabled = false
        btn5.disabled = false
        btn6.disabled = false
        btn7.disabled = false
        btn8.disabled = false
        btn9.disabled = false
        btn0.disabled = false
        btnC.disabled = false
        btnBack.disabled = false
        btnAdd.disabled = false
        btnSub.disabled = false
        btnMultiply.disabled = false
        btnDiv.disabled = false
        btnEqual.disabled = false
        btnDot.disabled = false
        input_field.value = "0"
        ans_text.innerText = "";

    }
}
// button functionality for 0 to 9
//button 1
function BtnOne() {
    if (input_field.value == '0') {
        input_field.value = 1;
    } else {
        input_field.value += 1;
    }
}
//button 2
function BtnTwo() {
    if (input_field.value == '0') {
        input_field.value = 2;
    } else {
        input_field.value += 2;
    }
}
//button 3
function BtnThree() {
    if (input_field.value == '0') {
        input_field.value = 3;
    } else {
        input_field.value += 3;
    }
}
//button 4
function BtnFour() {
    if (input_field.value == '0') {
        input_field.value = 4;
    } else {
        input_field.value += 4;
    }
}
//button 5
function BtnFive() {
    if (input_field.value == '0') {
        input_field.value = 5;
    } else {
        input_field.value += 5;
    }
}
//button 6
function BtnSix() {
    if (input_field.value == '0') {
        input_field.value = 6;
    } else {
        input_field.value += 6;
    }
}
//button 7
function BtnSeven() {
    if (input_field.value == '0') {
        input_field.value = 7;
    } else {
        input_field.value += 7;
    }
}
//button 8
function BtnEight() {
    if (input_field.value == '0') {
        input_field.value = 8;
    } else {
        input_field.value += 8;
    }
}
//button 9
function BtnNine() {
    if (input_field.value == '0') {
        input_field.value = 9;
    } else {
        input_field.value += 9;
    }
}
//button 0
function BtnZero() {
    if (input_field.value == '0') {
        input_field.value = 0;
    } else {
        input_field.value += 0;
    }
}
// clear button
function Clear() {
    input_field.value = 0;
    ans_text.innerHTML = "";
}
//Backspace Button  
function BtnBack() {
    input_field.value = input_field.value.slice(0, input_field.value.length - 1)
    if (input_field.value == "") {
        input_field.value = 0;
    }
}
// Dot or Decimal Button
function BtnDot() {
    var exist = input_field.value.indexOf(".")
    if (exist != true) {
        input_field.value += ".";
    }
}

//Arithmetic Functions
//sum Function
function BtnAdd() {
    num1 = parseFloat(input_field.value);
    //console.log(num1);
    input_field.value = 0;
    ans_text.innerText = num1 + "+";
    calc = 1;
    //console.log(calc);
}
//Difference Function
function BtnSubtract() {
    num1 = parseFloat(input_field.value);
    //console.log(num1);
    input_field.value = 0;
    ans_text.innerText = num1 + "-";
    calc = 2;
    //console.log(calc);
}
//sum Function
function BtnMultiply() {
    num1 = parseFloat(input_field.value);
    //console.log(num1);
    input_field.value = 0;
    ans_text.innerText = num1 + "X";
    calc = 3;
    //console.log(calc);
}
//sum Function
function BtnDivide() {
    num1 = parseFloat(input_field.value);
    //console.log(num1);
    input_field.value = 0;
    ans_text.innerText = num1 + "/";
    calc = 4;
    //console.log(calc);
}

// Equal Button
function BtnEqual() {
    var num2 = parseFloat(input_field.value);
    var num = 0;
    //console.log(num);


    switch (calc) {
        case 1:
            num = num1 + num2;
            break;
        case 2:
            num = num1 - num2;
            break;
        case 3:
            num = num1 * num2;
            break;
        case 4:
            num = num1 / num2;
            break;
    }
    input_field.value = num;
    ans_text.innerText = "";
}



