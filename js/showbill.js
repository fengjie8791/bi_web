$(function() {
	
	Parse.$ = jQuery;
	// Parse.initialize("5FX0ozbyiWW9ZbnOOHrPx2gqeS1CmJgtoREobFMI", "xS34xOBiTinuQcDO0kI4cIsiBLKwPF7W03hCyMES");
	Parse.initialize("azsRTGq3fZJ7qldmuCGVQ8e9QoCV3JtLzIhiakhc", "Kjwx336Lk5jb0oa2KZq0l5svpZJBNb04saBgmqYe");
	


	var query = new Parse.Query("Instachecks");

	var $count = 1;
	var $id = "RgtlUQ50rf";
	getBill();

	function getBill(){

					query.get($id, {
											success:function(object){
												$b_1 = JSON.stringify(object)

												
												$result = $.parseJSON( $b_1)

											 
												$rew = $result.instacheckItems ;

											

												$array = [$rew.split("\n")]
												console.log($b_1);


												$("#billsdiv").html("<p class='bill_num'>Bill " + $count + "</p>")

												for($i = 0; $i < $array[0].length ; $i++ ){
													$("#billsdiv").append("<p class='bill_list'>"+ $array[0][$i]+"</p>")
												}


													
												
											},
											error: function(object,error){
												console.log(error);
											}

										})





	}






				$("#bill_left").on("click",function(){

					$count--;

					if($count == 0){
						$count = 5;
					}
					if($count == 6){
						$count = 1;
					}
			

					if($count == 1){
						$id = "RgtlUQ50rf";
					}else if($count == 2){
						$id = "RBfHdFGER8";
					}else if($count == 3){
						$id = "EcxSEza1T2";
					}else if($count == 4){
						$id = "Ccg5Y750r8";
					}else if($count == 5){
						$id = "g3IXrzR4cn";
					}


					getBill();
					


				});


				$("#bill_right").on("click",function(){

					$count++;

					if($count == 0){
						$count = 5;
					}
					if($count == 6){
						$count = 1;
					}

					if($count == 1){
						$id = "RgtlUQ50rf";
					}else if($count == 2){
						$id = "RBfHdFGER8";
					}else if($count == 3){
						$id = "EcxSEza1T2";
					}else if($count == 4){
						$id = "Ccg5Y750r8";
					}else if($count == 5){
						$id = "g3IXrzR4cn";
					}


					getBill();
					
			


				})


	
});



