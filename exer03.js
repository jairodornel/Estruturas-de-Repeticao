function Verificar() {

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');

    var c = 0 

    while( c <=18){

        res.innerHTML += c + " . "
        c= c+3 
    }

    res1.innerHTML = " Acabou !!"
}