// 16. Después de realizar una llamada a un archivo local en formato json,
// utiliza el método then() para filtrar los datos y mostrar solo los
// elementos que cumplan ciertos criterios (por ejemplo, mostrar solo los
// nombres que comiencen con "A").

fetch("ejercicio16.json") //LLamada al archvio json
.then(rta => rta.json())  //Convertir el resultado a .json
.then(dato => {           //Obtenemos los datos del archivo json
    dato.forEach(objeto => { //Recorremos los datos por cada objeto del archivo
        const datosInt = Object.values(objeto).filter(enteros => Number.isInteger(enteros));
        console.log(datosInt);
        //Se declara una variable en la que se obtendra los valores del objeto "objeto", se filtra
        //solo los valores de tipo entero y finalmente se muestra
    });
})
