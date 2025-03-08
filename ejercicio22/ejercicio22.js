// 22. Crear un objeto proxy usando la clase Proxy

let equipo = {
    nombre : "Barcelona",
    dt : "Flick",
    champions : 5
}

const poroxy = new Proxy(equipo, {});
console.log(equipo);


console.log("Las champions que tiene el equipo son: " + poroxy.champions);
