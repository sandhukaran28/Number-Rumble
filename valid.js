var x=0;



function hide()
{
	var x=document.getElementById("first");
	x.style.display="none";	
	document.getElementById("msg_turn").innerHTML="It's your turn, Select an option";
   var y=document.getElementById("myDiv");
	y.style.display="block";	
	 var z=document.getElementById("sum2");
	document.getElementById("sum2").innerHTML="<br><br>  Sum:";
document.getElementById("sum3").innerHTML="0";	
document.getElementById('ID').play();
		  	
	}
	
	function addition1()
	{
		 if(x>=52)
		 {
			 document.getElementById("sum2").innerHTML="<br><br>  You";
							document.getElementById("sum3").innerHTML=" lose...";
							document.getElementById('ID1').play();
							return false;
		 }
			x=x+1;
			document.getElementById("sum3").innerHTML=x;
			
			setTimeout(function myturn1(){ 
		
				document.getElementById("msg_turn").innerHTML="I choose 3, Now your turn";
				x=x+3;
				document.getElementById("sum3").innerHTML=x;
				if(x==52)
		  {
			  				document.getElementById("msg_turn").innerHTML="Game Over";
							document.getElementById("sum2").innerHTML="<br><br>  You";
							document.getElementById("sum3").innerHTML=" lose...";
							document.getElementById('ID').pause();
							document.getElementById('ID1').play();
							
		  }
			
			}, 1000);
			
			}
			function addition2()
	{
		 if(x>=52)
		 {
			 document.getElementById("sum2").innerHTML="<br><br>  You";
							document.getElementById("sum3").innerHTML=" lose...";
							document.getElementById('ID1').play();
							return false;
		 }
			
			x=x+2;
			document.getElementById("sum3").innerHTML=x;
			
			setTimeout(function myturn1(){ 
				document.getElementById("msg_turn").innerHTML="I choose 2, Now your turn";
				x=x+2;
				document.getElementById("sum3").innerHTML=x;
				if(x==52)
		  {
			  				document.getElementById("msg_turn").innerHTML="Game Over";
							document.getElementById("sum2").innerHTML="<br><br>  You";
							document.getElementById("sum3").innerHTML=" lose...";
							document.getElementById('ID').pause();
							document.getElementById('ID1').play();
		  }
			
			}, 1000);
			
			}
			
			function addition3()
	{
		   if(x>=52)
		 {
			 document.getElementById("sum2").innerHTML="<br><br>  You";
							document.getElementById("sum3").innerHTML=" lose...";
							document.getElementById('ID1').play();
							return false;
		 }
			
			x=x+3;
			document.getElementById("sum3").innerHTML=x;
			
			setTimeout(function myturn1(){ 
				document.getElementById("msg_turn").innerHTML="I choose 1, Now your turn";
				x=x+1;
				document.getElementById("sum3").innerHTML=x;
			if(x==52)
		  {
			  				document.getElementById("msg_turn").innerHTML="Game Over";
							document.getElementById("sum2").innerHTML="<br><br>Sum:52<br>You";
							document.getElementById("sum3").innerHTML=" lose...";
							document.getElementById('ID').pause();
							document.getElementById('ID1').play();
					
		  }
			}, 1000);
			
			}
			
			
			
	
	
	
	
