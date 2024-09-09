function Verificar(){

    var res= document.getElementById('resul');
    var res1 = document.getElementById('resul1');
    var res2 = document.getElementById('resul2');


    var c = 0 
    var mai = 0 
    var meni = Number.MAX_VALUE; 

    while (c <=7){
        var n = Number(prompt('Digite o preço do produto : '))

        res.innerHTML+= n + " . "

        if(n>mai){
            mai= n 
        } else if( n < meni){

            meni= n 
        }

        c++


    }

    res1.innerHTML= " O maior número é :  " + mai

    res2.innerHTML= " O menor número é : " + meni 

    
}