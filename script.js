    function relogio(){ 
          var data=new Date(); 
          var hor=data.getHours(); 
          var min=data.getMinutes(); 
          var seg=data.getSeconds(); 
 
         if(hor<10){
         hor="0"+hor; 
         } 
         if(min<10){ 
         min="0"+min; 
         } 
         if(seg<10){ 
         seg="0"+seg;
         }

         var horas=hor+":"+min+":"+seg;
         document.getElementById("rel").value=horas
    }
     var tempo=setInterval(relogio,1000);
        

   function limpar(){
	     
	        document.getElementById('visor').value= '';
	 
	 
	       }
	 
   function preencher(valor){
	   
	 	      document.getElementById('visor').value += valor;
	 
         }
	 
   function calcular (){
	       var resultado = 0;
	       resultado = document.getElementById('visor').value;
	 
	       document.getElementById('visor').value = "";
	     
	       document.getElementById('visor').value = eval(resultado);

	      }