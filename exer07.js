function Verificar(){

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');

    var a = Number(prompt('Digite o primeiro numero :'));
    var b = Number(prompt('Digite o número final :'));
    var c = Number(prompt('Digite o incremento : ')); 

     var x = a 

    while( x <= b ){

        res.innerHTML+= x + " . "
        x =x + c 

    }

    res1.innerHTML = " Acabou !! "
}