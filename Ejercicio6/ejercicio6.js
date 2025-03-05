// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como  argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true


//Funcion some
// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));


const resultado = num => {
  return num % 2 == 0;
}

const probar = (array, llamado) => {
  for (let i = 0; i < array.length; i++) {
    if (llamado(array[i])) return true;
  }
  return false;
}

console.log(probar([1, 1, 3, 3, 5], resultado));
