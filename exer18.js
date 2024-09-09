function Verificar(){

    var res = document.getElementById('resul'); 
    var res1 = document.getElementById('resul1');


    var c = 0 

    do{

        res.innerHTML+= c + " . "
        c= c + 3 
    } while ( c<=30) 

        res1.innerHTML= " Acabou! "

}