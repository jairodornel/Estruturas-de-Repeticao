function Verificar(){

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');

    var Vinicial = Number(prompt('Digite o valor inicial:'));
    var Vfinal = Number(prompt('Digite o valor final : '));
    var incre = Number(prompt('Digite o incremento : '));

    var c = Vinicial
    
    
    if(c>Vfinal){
    while(c>=Vfinal){

        res.innerHTML+= c + " . "
        c=c-incre 

    }
} else if(c<Vfinal ){


    while(c <= Vfinal ){

        res.innerHTML+= c + " . "
        c=c+incre
    }
}
       res1.innerHTML= "Acabou !!"

}