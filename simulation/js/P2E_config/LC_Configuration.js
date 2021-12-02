

LC_ConfigureLY = function(appId){
	
	
		var LC_ConfigFlagCnt = 0;
		
		$("#TestDiv").html('');
		
		var configure = '';
		configure +='<div id = "configDiv" class="container-fluid">'
				+'<h4 align="center">LY Configuration</h4>'
				+'<h6>In this level configure the LY 100</h6>'
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Select Type:</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<select class="form-control" name="App" id="trsmtrType" >'
				+'<option value="-1">Select</option>'
				+'<option value="direct">Direct Acting</option>'
				+'<option value="reverse">Reverse Acting</option>'
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Select Input:</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<select class="form-control" name="App" id="LC_spanLevel" >'
				+'<option value= -1 >Select</option>'
				+'<option value= 0 data-lowerspan = "0.2" data-higherspan="1">0.2 to 1 kg/cm²</option>'					
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Air Supply :</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'1.4 kg/cm<sup>2</sup>'
				+'</div><br/>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Output :</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<select class="form-control" name="App" id="output" >'
				+'<option value="-1">Select</option>'
				+'<option value="0" data-loweroutput = "4" data-higheruotput="20">4~20 mA</option>'
				+'<option value="1" data-loweroutput = "20" data-higheruotput="4">20~4 mA</option>'	
			
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Supply Voltage :</label> '
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'24 VDC'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Loop Impedance :</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'165 Ohm'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="buttonDiv">'
				+'<button id="LC_LYcheckConfig">Check Configuration</button>&nbsp;&nbsp;&nbsp;'
				+'<button id="LC_LYwiringDiagram" hidden >Next Level</button>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				+'</div>'; // container close
				
				
		
			
			$("#TestDiv").html(configure);
			
			stop_timer();
			set_timer();
		
		//animLT.repeat(0);
		P2ELYCircle.attr({'fill':'green'});	
		glowLY.stop(animLY);
		P2ELYCircle.unclick(LYClick);
	     

		 
		 
		 
		 
		 
		 $('#LC_LYcheckConfig').on(
				'click', function() {
					
					 var LC_configData = {};
					 var selectedType = $( "#trsmtrType option:selected" ).val();
					 var span = parseInt($( "#LC_spanLevel option:selected" ).val());
					 var output = $( "#output option:selected" ).val();
		
					
					
					 var lowerSpanLevel = $("#LC_spanLevel").find(':selected').data('lowerspan');
					 var higherSpanLevel =  $("#LC_spanLevel").find(':selected').data('higherspan');
					
					 var lowerOutputLevel = $("#output").find(':selected').data('loweroutput');
					 var higherOutputLevel =  $("#output").find(':selected').data('higheruotput');
					  
					
	             if(selectedType != "-1" && span != "-1"  && output != "-1"){
						
						
					
						if(selectedType =="direct" && output == "0"){
							
							 alertify.alert("Success","Configuration is successful.<br> Please click next level to proceed for wiring of LY 100");
							 $(".ajs-header").css("background-color","#4CAF50");
			            	 $("#trsmtrType, #LC_spanLevel, #output").prop("disabled", true);
			            	 $('#LC_LYwiringDiagram').show();
							
						}else if(selectedType =="reverse" && output == "1"){
							
							 alertify.alert("Success","Configuration is successful.<br> Please click next level to proceed for wiring of LY 100");
							 $(".ajs-header").css("background-color","#4CAF50");
			            	 $("#trsmtrType, #LC_spanLevel, #output").prop("disabled", true);
			            	 $('#LC_LYwiringDiagram').show();
						}else{
							
							alertify.alert("Alert","Please select the correct output as per selected P/E converter type");
							 $(".ajs-header").css("background-color","#ce6058");
							 LC_ConfigFlagCnt++;
						}
	            
						
						minutes = document.getElementById("minutes").textContent;
		        		seconds = document.getElementById("seconds").textContent;        		
//		        		console.log(minutes+":"+seconds);
						
						LC_configData.appId = appId;
						LC_configData.Type = selectedType;
						LC_configData.span = span;
						LC_configData.lowerSpanLevel= lowerSpanLevel;
						LC_configData.higherSpanLevel= higherSpanLevel;
						LC_configData.output = output;
						LC_configData.configcnt = LC_ConfigFlagCnt;
						LC_configData.lowerOutputLevel= lowerOutputLevel;
						LC_configData.higherOutputLevel= higherOutputLevel;
						LC_configData.configTimeInMin = minutes;
						LC_configData.configTimeInSec = seconds;
						
						
//						console.log(LC_configData);
						LC_appData.lcConfigData = LC_configData;
//						console.log(LC_appData);
						ExpTrackData.lcAppData = LC_appData
//						console.log(ExpTrackData);
						
						
						stop_timer();
						
						
					
		
						
					
						
					}else{
						
						alertify.alert("Alert","Please select all the fields");
						 $(".ajs-header").css("background-color","#ce6058");
						
					}
					
		 });
		 
		 
	
			$('#LC_LYwiringDiagram').on(
				'click', function() {
					
						var selectedType = $( "#trsmtrType option:selected" ).val();
		//				console.log(selectedType);
						connectionLevel(appId, selectedType);
						
							
				});
}

 
		   
			
							
							
			