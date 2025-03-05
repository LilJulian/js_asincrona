// 3. Crear una función map que acepte un array y un callback y que:
//     • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
//     • obtenga el resultado
//     • lo pushee a un nuevo array
//     • devuelva el array final con el resultado de cada una de las llamadas al callback.



//Metodo map
// const numbers = [1, 2, 3, 4, 5]
// const newNumber = numbers.map(function (number) {
//   return number * 2
// })

// console.log(newNumber);


let lastArray = [];

const callback = (num) => {
  return num * 10;
}

const map = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      lastArray.push(callback(array[i]));
    }
  }
  console.log(lastArray);

}

map([1, 2, 3, 4, 5, 6, 7, 8], callback);


