// 21. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.


async function posibleError() {
    try {
      const rta = await fetch("ejercicio21.json");
      if (rta == false) {
        throw new Error(`Posible error: ${rta.status}`);
      }

      const datos = await rta.json();
      console.log("Las peliculas son: ", dato);
      
    } catch (error) {
      console.error("No se ha podido encontrar el archivo.", error.message);
    }
  }
  
  posibleError();
  