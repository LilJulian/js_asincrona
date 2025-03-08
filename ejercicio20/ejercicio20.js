// 20. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

async function Procesar_elemento(lista, num) {

        return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`paso: ${num} ${lista}`);
            resolve();
        }, 1000);
        })
    }
    
    async function llamadas_asincronicas() {
        let lista = ["levantarse","bañarse","comer","cepillarse"];
        let num = 1;
        for (let i = 0; i < lista.length; i++) {
        await Procesar_elemento(lista[i], num++);
        
        }
    
        console.log("a estudiar");
    }
    llamadas_asincronicas();