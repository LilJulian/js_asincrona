// 11. Crea una Promisa que se resuelva después de 3 segundos y luego imprima "Promisa resuelta" cuando se cumpla.

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promisa resuelta"), 3000);
  // setTimeout(() => reject(new Error("mal")), 4000)
})

promesa.then(
  resuelto => console.log(resuelto),
  error => console.log(error)
)
