function Verificar(){

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');

    var n= prompt('Digite um numero : '); 

    var c = 0 

    while( c <= n ){

        res.innerHTML += c + " . "
        c++
    }

    res1.innerHTML= " Acabou!! "
}