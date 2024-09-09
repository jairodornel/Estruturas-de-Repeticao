function Verificar(){

    var res = document.getElementById('resul');
    var res1= document.getElementById('resul1');
    var res2 = document.getElementById('resul2');

    var c = 6 
    var a = 0

    while(c<=100){
 
        res.innerHTML+= c + " . "
        a=a+c
        c=c+2

        
        
        res1.innerHTML+= a + " . "
    }

    res2.innerHTML= " A soma é " + a 
}