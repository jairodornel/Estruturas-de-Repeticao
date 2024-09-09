function Verificar(){

    var res= document.getElementById('resul');
    var res1 = document.getElementById('resul1');


    var c=0 
    var soma = 0
    var soma1 = 0 

    while( c <= 4){

        var n = Number(prompt("Digite um número : "))
        if(n%2==0){

            soma= soma + 1
        } else{

            soma1= soma1 + 1 
        }

        c++ 
    }

    res.innerHTML= " Quantidades de números pares : " + soma 

    res1.innerHTML= " Quantidade de números Impares : " + soma1 
}