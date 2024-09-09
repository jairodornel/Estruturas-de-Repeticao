function Verificar(){

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');
    var res2 = document.getElementById('resul2');
    var res3 = document.getElementById('resul3'); 


    var c = 0 
    var soma = 0 
    var mai= 0 
    var meno= 0 
    var maior= 0 

    while( c<=9 ){

        var ida= Number(prompt('Digite a idade : ')); 

        soma= soma + ida
        
        if(ida>18){
           mai= mai + 1 

        }else if(ida<5 ){

            meno= meno + 1 
        } 
        
        if( ida > maior){

            maior = ida 
        }
        c++ 

    }

    var media= soma/3 

    res.innerHTML= " A media do grupo é " + media 
    res1.innerHTML= " A qtd de pessoas acima dos 18 anos é : " + mai
    res2.innerHTML= " A qtd de pessoas menores de 5 anos é : "+ meno 
    res3.innerHTML= " A maior idade é : " + maior
}