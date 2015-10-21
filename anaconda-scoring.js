$(document).ready(

	function() {
		$("#submit").click(function() {

			//validasi username dan email
			if( ($("#username").val() == "") || ($("#email").val() == "") ){
				$("#ack").html("You Must Insert Your Username and Email");
			}

			//Mengirim data ke server jika username dan email sudah diinput
			else{
				$.post( "anaconda.php", {
					username : $("#username").val(),
					email : $("#email").val(),
					scoreData : score },
					function(data){
						var notif;
						
						$("#ack").empty();

						if(data.trim() == 'success'){
							notif="Your Score Have Been Recorded";
							$("#anacondaForm").hide();
						}
						else if(data.trim() == 'failed'){
							notif = "Connection Error, Please Try Again";
						}

						else{
							notif = data;
						}
						
						$("#ack").html(notif);
						
					});
				//clear();
				
				
				$("#anacondaForm")[0].reset();
			}

			$("#anacondaForm").submit(function(){
					return false;
			});

		});
	}
/*
	function clear(){
		$("#anacondaForm:input").each(
			function(){
				$(this).val("");
		});
	}
*/
);