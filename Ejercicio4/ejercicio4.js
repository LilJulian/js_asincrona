// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como  argumento



//Metodo filter

// const words = ["spray", "elite", "exuberant", "destruction", "present"];
// const result = words.filter((word) => word.length > 6);
// console.log(result);


let lastArray = [];

const condicion = palabra => {
  return palabra.toUpperCase();
}

const filtrar = (arreglo, callback) => {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].length > 4) {
      lastArray.push(callback(arreglo[i]));
      console.log(arreglo[i]);
    }
  }
  console.log(lastArray);

}

filtrar(["hola", "barcelona", "tania", "pandablack"], condicion);