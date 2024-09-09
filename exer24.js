function Verificar(){

    var res = document.getElementById('resul');
    var res1= document.getElementById('resul1');

    var n = Number(prompt('Digite o ultimo número : '))


    for(var c=0; c<=n; c++){

        res.innerHTML+= c + " . "
    }

    res1.innerHTML= " Fim ! "
}