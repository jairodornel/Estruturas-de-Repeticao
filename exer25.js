function Verificar() {

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');
    var res2 = document.getElementById('resul2');
    var res3 = document.getElementById('resul3');

     var nM= 0 
     var p20= 0 
     var soma =0 
     var maior = 0 


    for (var c=0; c<=2; c++){

        var sexo = prompt('Digite o sexo M/F : ');
        var peso= Number(prompt('Digite o peso : '))

        if(sexo =='F'){
              nM= nM +1 
              soma= soma + peso 

        }

        if(sexo=='M' && peso > 100){

            p20=p20 +1 
        }

        if( sexo == 'M' && peso > maior){

            maior = peso 
        }
    }
 

        var media = soma / nM     

        res.innerHTML= " A quantidade de mulheres são : " + nM
        res1.innerHTML= "Qtd homens acima de 100 kg são : " + p20
        res2.innerHTML= " A media de peso das mulheres são : " + media 
        res3.innerHTML = " O maior peso entre os homens são : " + maior 


}