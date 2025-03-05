// 5. Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como  argumento
// • devuelva true si todas las llamadas al callback devolvieron true


//Funcion every
// function isBigEnough(element) {
//   return element >= 10;
// }

// console.log([12, 5, 8, 130, 44].every(isBigEnough));
// console.log([12, 54, 18, 130, 44].every(isBigEnough));


const retorno = a => {
  return a >= 10;
}

const cada = (array, condicion) => {
  for (let i = 0; i < array.length; i++) {
    if (condicion(array[i]) == false) {
      return false;
    }
  }
  return true;
}

console.log(cada([12, 15, 18, 130, 44], retorno));

