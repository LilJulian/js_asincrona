// 12. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que  diga "Operación completada".Utiliza async / await.

async function asincronica() {
  let cadena = await new Promise((resuelto) => {
    setTimeout(() => resuelto("Operación completada"), 1000);
  });
  console.log(cadena);
}

asincronica();
