// 17. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.


async function llamada() {
        const rta = await fetch("ejercicio17.json"); // Llamar al archivo json
        const juegos = await rta.json();   // Convertir la respuesta a json
        juegos.forEach(element => {
            console.log(`juego: ${element.nombre}, plataforma: ${element.plataforma}`);
            
        });
  }

  llamada();
  