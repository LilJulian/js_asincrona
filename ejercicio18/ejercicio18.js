// 18. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

const promesa1 = () => new Promise((resolve => setTimeout(() => resolve("espere un segundo"),1000)));
const promesa2 = () => new Promise((resolve => setTimeout(() => resolve("espere un segundo mas"),2000)));
const promesa3 = () => new Promise((resolve => setTimeout(() => resolve("uno mas, ya casi"),5000)));


Promise.all([promesa1(),promesa2(),promesa3()])
console.log("Promesas cumplidas")
.then(promesas => {console.log(promesas)
}

);