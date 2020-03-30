/* CALLBACKS -- libreria request

const request = require ('request');

request('http://google.com',function(){ // esto seria un callbacks, es una funcion que se pasa como argumento a un metodo asincrono
    console.log('Termine con la peticion de google'); // y como segundo mensaje va a ser esta, por que se ejecuta asincronamente.
});

console.log('Yo voy despues, en el codigo, de la peticion de google'); // se va a ejecutar primero esta linea

*/

//PROMESAS -- libreria request-promise

//ESTADOS

const rp = require('request-promise');

rp('http://google.com')
    .then(function(html){
        console.log('Termine la peticion de google');
    }).catch(function(err){
        console.log(err);
    })
