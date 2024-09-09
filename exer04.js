function Verificar() {

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');

    var c = 100 

    while ( c >=0){

        res.innerHTML += c + " . "
        c=c-5 

    }

    res1.innerHTML= " Acabou ! "
}