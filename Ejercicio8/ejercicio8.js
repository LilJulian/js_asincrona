// 8. Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como  argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que  devuelva true
// • sí ningún callback devuelve true, devuelva undefined


//funcion findindex
// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));


const resultado = num => {
  return num > 13;
}

const encuentra = (array, llamado) => {
  for (let i = 0; i < array.length; i++) {
    if (llamado(array[i])) {
      return true;
    }
  }
  return undefined;
}

console.log(encuentra([5, 12, 18, 10, 4], resultado));


