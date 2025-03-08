// 19. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

const promesa1 = () => new Promise((resolve  => setTimeout(() => resolve("espere un segundo"),1000)));
const promesa2 = () => new Promise((resolve ,reject) => setTimeout(() => reject("rechazada"),2000));
const promesa3 = () => new Promise((resolve => setTimeout(() => resolve("uno mas, ya casi"),5000)));


Promise.allSettled([promesa1(),promesa2(),promesa3()])
.then(promesas => {console.log(promesas)
}
);