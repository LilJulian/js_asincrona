// Usando la funcion set timeout

// function imprimirNumeros(desde, hasta) {
//   setTimeout(() => {
//     if (desde <= hasta) {
//       console.log(desde++);
//       imprimirNumeros(desde, hasta);
//     }
//   }, 1000);
// }


// const aumentarNum = (desde, hasta) => {
//   if (desde <= hasta) {
//     console.log(desde);
//   } else console.log("ya");

// }


// const imprimirNumeros = (desde, hasta, aumentarNum) => {
//   setTimeout(() => {
//     aumentarNum(desde, hasta);
//     desde++;
//     imprimirNumeros(desde, hasta, aumentarNum);
//   }
//     , 1000);
// }


// const aumentarNum = (desde, hasta) => {
//   if (desde <= hasta) {
//     console.log(desde);
//   } else console.log("ya");

// }


// const imprimirNumeros = (desde, hasta, aumentarNum) => {
//   setTimeout(() => {
//     aumentarNum(desde, hasta);
//     desde++;
//     setTimeout(() => {
//       imprimirNumeros(desde, hasta, aumentarNum);
//     }, 500);
//   }
//     , 500);
// }


// imprimirNumeros(1, 6, aumentarNum);



// function imprimirNumeros(desde, hasta) {
//   setInterval(() => {
//     if (desde <= hasta) {
//       console.log(desde++);
//       imprimirNumeros(desde, hasta);
//     }
//   }, 1000);
// }




const respuesta = (rta) => {
  if (rta > 20) {
    alert("Puede comprar algo")
  } else {
    alert("No puede comprar")
  }
};

const sumar = (a, b, callback) => {
  let c = a + b;
  // todo el cuerpo de la función
  //.
  //.
  callback(c);
}


sumar(20, 1, respuesta)