document.getElementById("numero7").addEventListener("click",numero7);

function numero7() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("numero7").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("numero8").addEventListener("click",numero8);

function numero8() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("numero8").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("numero9").addEventListener("click",numero9);

function numero9() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("numero9").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("division").addEventListener("click",division);

function division() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("division").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("numero4").addEventListener("click",numero4);

function numero4() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("numero4").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("numero5").addEventListener("click",numero5);

function numero5() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("numero5").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("numero6").addEventListener("click",numero6);

function numero6() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("numero6").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("multiplicacion").addEventListener("click",multiplicacion);

function multiplicacion() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("multiplicacion").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("numero1").addEventListener("click",numero1);

function numero1() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("numero1").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("numero2").addEventListener("click",numero2);

function numero2() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("numero2").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("numero3").addEventListener("click",numero3);

function numero3() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("numero3").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("suma").addEventListener("click",suma);

function suma() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("suma").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("numero0").addEventListener("click",numero0);

function numero0() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("numero0").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("resta").addEventListener("click",resta);

function resta() {
    var actual = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById("resta").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
}

document.getElementById("mostrarResultado").addEventListener("click",mostrarResultado);

function mostrarResultado() {
    var actual = document.getElementById('resultado').innerHTML;
    var suma = actual.indexOf("+");
    var resta = actual.indexOf("-");
    var div = actual.indexOf("÷");
    var mult = actual.indexOf("*");

    if (suma !== -1) {
        arr = actual.split("+",2);
        res = parseInt(arr[0]) + parseInt(arr[1]);
        document.getElementById("resultado").innerHTML = res; 
    } else if (resta !== -1) {
        arr = actual.split("-",2);
        res = arr[0] - arr[1];
        document.getElementById("resultado").innerHTML = res;
    } else if (div !== -1) {
        arr = actual.split("÷",2);
        res = arr[0] / arr[1];
        document.getElementById("resultado").innerHTML = Math.round = res;
    } else if (mult !== -1) {
        arr = actual.split("*",2);
        res = arr[0] * arr[1];
        document.getElementById("resultado").innerHTML = res;
    }
}



