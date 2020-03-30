function calcular(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,400,[5,6]);
    })
}

function SegundoCalculo(numero){ //numero: almacena el valor de la promesa
    console.log(numero); // sale de calcular, que seria de la primer promesa, que tardo 400
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,200,'Segunda Promesa');// luego de los 400 mas 200 saldra el mensaje de segunda promesa
    })
}

function TercerCalculo(numero){ 
    console.log(numero); 
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,200,'Tercera Promesa');
    })
}

calcular().then(SegundoCalculo).then(TercerCalculo).then(console.log);