function Verificar() {

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');

    var c=30

    while( c >= 0){

    

        if(c%4==0){

            res.innerHTML+= "["+ c + "]" 
        }else{

            res.innerHTML += c + " . "
        }

        c--
    }
}