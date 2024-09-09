function Verificar(){

    var res = document.getElementById('resul');
    var res1= document.getElementById('resul1');
   

    

    for(var c=0; c<=40 ; c=c+5){

        res.innerHTML+= c + " . "
    }

    res1.innerHTML= " Acabou ! "
}