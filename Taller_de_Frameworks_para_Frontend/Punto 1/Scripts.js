function suma() {
    var x = parseInt(document.getElementById('Numero1').value);
    var y = parseInt(document.getElementById('Numero2').value);
    document.getElementById("Resultado").innerHTML = x+y;
}

function resta() {
    var x = parseInt(document.getElementById('Numero1').value);
    var y = parseInt(document.getElementById('Numero2').value);
    document.getElementById("Resultado").innerHTML = x-y;
}

function multiplicacion() {
    var x = parseInt(document.getElementById('Numero1').value);
    var y = parseInt(document.getElementById('Numero2').value);
    document.getElementById("Resultado").innerHTML = x*y;
}

function division() {
    var x = parseInt(document.getElementById('Numero1').value);
    var y = parseInt(document.getElementById('Numero2').value);
    document.getElementById("Resultado").innerHTML = x/y;
}

function potencia() {
    var x = parseInt(document.getElementById('Numero1').value);
    var y = parseInt(document.getElementById('Numero2').value);
    document.getElementById("Resultado").innerHTML = x**y;
}