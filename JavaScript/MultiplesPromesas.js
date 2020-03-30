let p1 = new Promise((resolve,reject)=>setTimeout(resolve,500,'Hola mundo'));

let p2 = new Promise((resolve,reject)=>setTimeout(resolve,600,'Segundo Hola mundo'));

let p3 = Promise.reject();

let saluda = ()=> console.log('Hola a todos');

/*Promise.all([p1,p2]).then(resultados =>{ //Fallara si una de las promesas falle
    console.log(resultados); //aca vemos los resultados de las promesas, en un arreglo
    saluda(); // se ejecutara una vez terminadas todas las promesas de forma exitosa
})*/

Promise.all([p1,p2,p3]).then(resultados =>{ //Fallara si una de las promesas falle
    console.log(resultados); //aca vemos los resultados de las promesas, en un arreglo
    saluda(); // se ejecutara una vez terminadas todas las promesas de forma exitosa
}).catch(()=>console.log('Falle'));