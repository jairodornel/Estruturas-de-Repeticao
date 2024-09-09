function Verificar(){

    var res = document.getElementById('resul')
    var res1 = document.getElementById('resul1')
    var res2 = document.getElementById('resul2')
    var res3 = document.getElementById('resul3')
    var res4 = document.getElementById('resul4')


    var c = 0 
    var nH = 0 
    var nM = 0 
    var soma = 0 
    var soma1= 0 
    var nM20 = 0 

    while(c<=2){

        var ida = Number(prompt('Digite a idade :'))
        var sexo = prompt('Digite o sexo M/F')

        soma = soma + ida 

        if(sexo =='M'){

          nH= nH +1 

          soma1= soma1 + ida 


        } else if(sexo == 'F'){

            nM = nM + 1
        }

        if(sexo == 'F' && ida >20 ){

                nM20= nM20 + 1 
        }

        

        c++ 
    }

    var media = soma /3 
    var media1 = soma1/nH 
    

    res.innerHTML= " O numero de homens são : " + nH 
    res1.innerHTML= " O numero de mulheres são : " + nM
    res2.innerHTML= " A media do grupo é :" + media 
    res3.innerHTML= " A media de idades de homens são : " + media1 
    res4.innerHTML= " A quantidade de mulheres maiores de 20 anos são : " + nM20 
}


