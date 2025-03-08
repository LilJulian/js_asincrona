// 23. Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como 
// al final de estos y se debe mostrar el error personalizado por consola

const validarTipo = {
    numerico: (valor) => typeof valor === "number" && !isNaN(valor),
    alfanumerico: (valor) => /^[A-Za-z]+$/.test(valor),
    email: (valor) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor),
    date: (valor) => !isNaN(Date.parse(valor))
  };
  
  const handler = {
    set(target, prop, value) {
      if (typeof value === "string") {
        value = value.trim(); // Eliminar espacios en blanco 
      }
      const reglas = {
        edad: "numerico",
        nombre: "alfanumerico",
        correo: "email",
        fechaNacimiento: "date"
      };
  
      const tipoEsperado = reglas[prop];
  
      if (tipoEsperado && !validarTipo[tipoEsperado](value)) {
        console.error(`Error: El valor de "${prop}" debe ser un ${tipoEsperado} válido.`);
        return false;
      }
  
      
      target[prop] = value;  // Si es valido se le asginara el valor
      console.log(`El  / la ${prop} es: ${value}`);
      return true;
    }
  };
  

  const usuario = new Proxy({}, handler); //Guardamos el proxy en una variable
  

  usuario.edad = 25; 
  usuario.nombre = "Julian"; 
  usuario.correo = "juliadar267@gmail.com"; 
  usuario.fechaNacimiento = "2000-05-15"; 
  
  usuario.edad = 18; 
  usuario.nombre = "luis"; 
  usuario.correo = "correo@gmal.com"; 
  usuario.fechaNacimiento = "05-02-2024"; 
  usuario.nombre = "   Julian  "; 
  