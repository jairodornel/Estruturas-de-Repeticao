function Verificar(){

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');

    for(var c=100; c>=0; c=c-10){

        res.innerHTML+= c + ". "
    }

    res1.innerHTML= "  Acabou !!"
}