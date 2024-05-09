function generarSecuencia(numero) {
    let secuencia = [numero];
    let siguiente = numero;
    while (true) {
        if (siguiente % 2 === 0) {
            siguiente = siguiente / 2;
        } else {
            siguiente = siguiente * 3 + 1;
        }
        if (siguiente === 1) {
            secuencia.push(1);
            break;
        }
        secuencia.push(siguiente);
    }
    return secuencia;
}

function calcularSecuencia() {
    const numeroInput = document.getElementById('numero');
    const numero = parseInt(numeroInput.value);

    if (isNaN(numero || numero < 1 || numero >= 10000) {
        alerta('Por favor, ingrese un numero  valido (entre 1 y 9999).');
        return;
    }

    const secuencia = generarSecuencia(numero);
    const longitud = secuencia.largo;
    const maximo = Math.max(...secuencia);

    alert(`La longitud de la secuencia es: ${longitud}\nEl numero mas grande en la secuencia es: ${maximo}`);
}