function Verificar(){

    var res= document.getElementById('resul');
    var res1 = document.getElementById('resul1');
    var res2 = document.getElementById('resul2');


    var c = 500 
    var a = 0 

    while(c>=0){
        
        res.innerHTML+= c + " . "
        a=a+c
        c= c - 50 

        res1.innerHTML+= a + " . "

    }

    res2.innerHTML= " A soma é " + a 
}