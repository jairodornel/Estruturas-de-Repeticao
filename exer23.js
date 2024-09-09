function Verificar(){

    var res = document.getElementById('resul'); 

    var n = Number(prompt('Deseja qual tabuada ? '));

    for (var c= 0; c<=10; c++){
             
       // res.innerHTML +=   c+ " x " + n + " = "+ c*n  

       res.innerHTML += `${c} x ${n} = ${c * n} <br> `; 

    
    }
}