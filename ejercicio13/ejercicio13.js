// 13. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => (reject("Promise rechazada"), 1000));
});

promesa.catch(console.error);
