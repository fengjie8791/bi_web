$(function() {
	
	Parse.$ = jQuery;
	// Parse.initialize("5FX0ozbyiWW9ZbnOOHrPx2gqeS1CmJgtoREobFMI", "xS34xOBiTinuQcDO0kI4cIsiBLKwPF7W03hCyMES");
	Parse.initialize("azsRTGq3fZJ7qldmuCGVQ8e9QoCV3JtLzIhiakhc", "Kjwx336Lk5jb0oa2KZq0l5svpZJBNb04saBgmqYe");

	


	$(".form-signin").on("submit", function(e) {

		e.preventDefault();

		var user = new Parse.User();

		var data = $(this).serializeArray();
		username = data[0].value;
		password = data[1].value;
	

		user.set("username",username);
		user.set("password",password);
		

		user.signUp(null,{

			success: function(user){
			
				alert("Done!");
				location.href = "index.html";


			
			},
			error: function(object, error){
				alert("Unauthorized!");
			}
		});


	});



	
});