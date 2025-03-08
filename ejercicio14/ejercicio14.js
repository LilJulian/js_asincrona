// 14. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.
function promesaNumero(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let cont = 1;
            console.log(`numero elegido: ${num}`);
            resolve(num);
        }, 1000);
    });
}

promesaNumero(1)
    .then((resultado1) => {
        return promesaNumero(2).then((resultado2) => resultado1 + resultado2);
    })
    .then((resultadoParcial) => {
        return promesaNumero(3).then((resultado3) => resultadoParcial + resultado3);
    })
    .then((resultadoFinal) => {
        console.log(`el resultado de la suma total es: ${resultadoFinal}`);
    });
