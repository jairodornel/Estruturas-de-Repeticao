function Verificar() {

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');
    var res2 = document.getElementById('resul2');
    var res3 = document.getElementById('resul3');

   var soma = 0 
   var menor = Number.MAX_VALUE; 
   var c= 0 
   var par = 0 

  do {


   
    var n = Number(prompt('Digite um número : '));


    soma = soma + n 

    c= c+ 1 

    if(n < menor){

        menor= n 
    }

    var media = soma/ c 

    if( n%2==0){

       par = par + 1 
    }


    var continua= Number(prompt('Deseja continuar ? 1=Sim/ 2= Não '))

 
  }while( continua == 1)


    res.innerHTML= " O somatorios dos valores são : " + soma 
    res1.innerHTML= " O menor valor digitado foi :" + menor 
    res2.innerHTML= " A media entre os valores são : " + media 
    res3.innerHTML= " A qtd de números pares são : " + par 


}