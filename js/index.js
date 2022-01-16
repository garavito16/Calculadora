var displayDiv = document.querySelector("#display");
// displayDiv.innerText = "Some new value";
var operador = "";
var numero1 = 0;
var cont = 0;

function press(numero) {
    if(operador === "") {
        if(displayDiv.innerText === "0") displayDiv.innerText = numero;
        else displayDiv.innerText += numero;
    }
    else {
        if(cont === 0) {
            displayDiv.innerText = numero;
            cont++;
        }
        else displayDiv.innerText += numero;
    }
}

function clr() {
    displayDiv.innerText = "0";
    cont = 0;
    operador = "";
}

function setOP(op){
    operador = op;
    numero1 = Number(displayDiv.innerText);
}

function calculate() {
    let resultado = 0;
    let numero2 = Number(displayDiv.innerText);
    if(operador === "+") {
        resultado = numero1 + numero2;
    } else if(operador === "-") {
        resultado = numero1 - numero2;
    } else if(operador === "*") {
        resultado = numero1 * numero2;
    } else if(operador === "/") {
        resultado = numero1 / numero2;
    }
    displayDiv.innerText = resultado;
    cont = 0;
    operador = "";
}