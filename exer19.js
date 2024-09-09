function Verificar(){

    var res = document.getElementById('resul'); 
    var res1 = document.getElementById('resul1'); 
    var res2 = document.getElementById('resul2'); 


    
    var vIda= 0 
    var soma = 0 
    var m21= 0

    do{

        var idade = Number(prompt('Digite a idade : '));

        vIda=vIda + 1 

        soma = soma + idade 

        var media = soma / vIda 

        if(idade>=21){

           m21= m21 + 1 
        }

        var continua = Number(prompt('Deseja continuar ? 1=Sim/ 2=Nao : '));


        

           
            

        
         
    

    } while( continua == 1)

        res.innerHTML= " A qtd de idade digitadas são : " + vIda 
        res1.innerHTML= " A media das idades são : " + media 
        res2.innerHTML= " A qtd de pessoas com idade igual ou maior que 21 anos são : " + m21 




}