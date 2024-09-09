function Verificar(){

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');
    var res2 = document.getElementById('resul2');

    var c = 0 
    var aci = 0
    var divi = 0 

    while(c <=3){


    let x = Math.floor(Math.random() * 10);

    res.innerHTML+= x + " . "



    if(x>5){

        aci=aci+1 
    } else if(x % 3 == 0){

        divi= divi + 1 
    }
    
       c++
    }

    res1.innerHTML= " Qtd Números maior que 5 : " + aci

    res2.innerHTML= "Qtd Números divisiveis por 3 :" + divi
}