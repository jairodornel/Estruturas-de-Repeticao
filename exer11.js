function Verificar() {

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');

    var c = 0 
    var soma= 0 
    
    while(c <=6){
      
      var n=  Number(prompt("Digite um numero : ")); 
       
      c=c+1
       
      res.innerHTML+= n + " . "

      soma= soma + n 

       
    }

      res1.innerHTML= " A soma é " + soma  
}