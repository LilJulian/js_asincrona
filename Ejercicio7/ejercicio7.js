// 7. Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como  argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined


// // Funcion find
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 10);
// console.log(found);


const resultado = num => {
  return num > 10;
}

const encontrar = (array, llamado) => {
  for (let i = 0; i < array.length; i++) {
    if (llamado(array[i])) return true
  }
  return undefined;
}

console.log(encontrar([5, 2, 8, 11, 4], resultado));
