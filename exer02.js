function Verificar() {

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');

    var c= 10

    while(c>=3){

        res.innerHTML += c + " . "
        c--


    }

    res1.innerHTML = "Acabou!!"
}