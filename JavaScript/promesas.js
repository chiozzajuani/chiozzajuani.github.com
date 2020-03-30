//const request = require ('request');

//CONVIRTIENDO CALLBACK A PROMESA
function leer (url){
    return new Promise (function(resolve,reject){
        request(url,function(err,response){ // request trabaja con callback, primer argumento es un error y segundo es la respuesta.
            if(err){
                reject(err);
            }else{
                resolve(response);
            }
        });
    });
}

//PROMESA
/*leer('http://codigofacilito.com') // hoy en dia a esto se lo conoce como fetch, y te evitas de hacer todo esto.
    .then(function(response){
        console.log(response);
    })
    .catch(function(err){
        console.log(err);
    });
*/
//LO QUE ESTAMOS HACIENDO ACA ES CONVERTIR UN CALLBACK EN PROMESA, COMO EL REQUEST FUNCIONA CON CALLBACK
//LO CONVERTIMOS A PROMESA.

/*function asincrono (){
    return new Promise (function(resolve,reject){
        resolve('Todo salio bien'); // se debe llamar cuando la operacion asincrona termino y a su vez fue exitosa.

        reject(new Error('No se pudo completar'));// se debe llamar cuando la operacion asincrona termino con un error, y queremos informarlo.
    })
}*/



//chusmear el tema de fetch
const fetch = require('node-fetch');

const url = 'http://api.github.com/users/oscarjb1'

//ESTO SERIA MALA PRACTICA POR QUE TENDRIAMOS QUE USAR ENCADENAMIENTO
fetch(url)
    .then(response => {
        return response.json()
            .then(jsonResponse =>{
                console.log("json: ",jsonResponse)
            })
    })
    .catch(err =>{
        console.log(err);
    })

// ENCADENAMIENTO 

fetch(url)
    .then(response => {
        return response.json() //RETORNAME LA PROMESA
    })
    .then(jsonResponse =>{ //EJECUTO LA PROMESA DEL RESPONSE.JSON
        console.log("json: ",jsonResponse)
    })
    .catch(err =>{
        console.log(err);
    })