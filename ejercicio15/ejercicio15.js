// 15. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

fetch("ejercicio15.json")
.then(respuesta => respuesta.json()
.then(resuelto => console.log(resuelto))
);
