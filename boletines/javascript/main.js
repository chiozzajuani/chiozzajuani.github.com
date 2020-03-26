//console.log("Hola mundo desde un archivo externo de JavaScript");

//DOM
//let table = document.querySelector(".table"); //recorre el dom buscando un elemento que contenga la clase container, te devuelve el primero que encuentre.

//seleccionar mas de un elemento
/*let links = document.querySelectorAll("a"); // devuelve todos los elementos que cumplen con el criterio de busqueda.

links.forEach(function(link){
    console.log(link);
});*/

/*
let celdas = document.querySelectorAll("td"); 

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this)
    })
});
*/

//Obtener los elementos de .close
let links = document.querySelectorAll(".close");

//Recorrelos
links.forEach(function(link){
    //Agregar un evento click a cada uno de ellos
    link.addEventListener('click',function(evento){
        evento.preventDefault(); //evita que el evento siga su comportamiento por defecto
        let content = document.querySelector('.content');

        //Quitarle las clases de animacion que ya tiene
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");
        
        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        //instrucciones para retrazar un poco, setTimeout(),setInterval
        setTimeout(function(){
            location.href = "/boletines";
        },600);

        return false;
    });
});


//Poner clases de javaScript
/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fas"); // para quitar clases
});*/


