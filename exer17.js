function Verificar(){

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');
    var res2 = document.getElementById('resul2');
    var res3 = document.getElementById('resul3');

    var c =0 
    var soma = 0 
    var vP= 0 
    var vPA=0 
    var vPA1=0 

    while( c<=6){

        var peso = Number(prompt('Digite o peso : '))
        var altura = Number(prompt('Digite a altura : '))

        soma = soma + altura 

        if( peso > 90 ){

           vP= vP + 1 
        } 

        if(peso < 50 && altura < 1.60){

             vPA=vPA + 1 
        }

        if(peso > 100 && altura > 1.90 ){

            vPA1= vPA1 + 1 
        }

        c++ 
    }

     var media = soma/3

     res.innerHTML= " A media de alturas são : " + media 
     res1.innerHTML= " A qtd de pessoas com peso acima de 90kg são : " + vP 
     res2.innerHTML= " A qtd de pessoas com peso menor de 50 kg e altura menor que 1.60 são : "+ vPA
     res3.innerHTML=  " A qtd de pessoas com peso acima de 100 kg e altura acima de 1.90 são : " + vPA1

}