/*$("#wrap_outside li img" ).opacity=0;
$("#wrap_outside li img" ).opacity=0;
$("#wrap_outside li img" ).opacity=0;
$("#wrap_outside li img" ).opacity=0;*/



/*var wrap = document.getElementById("img_wrap"); 
var ul =wrap.getElementById("img_section");           
var li = ul.getElementsByTagName("li");      
var length = li.length;*/ 
	


	$("#outside").click(function(){
		$("#wrap_outside").css("display","block");
		$("#wrap_teach " ).css("display","none");
		$("#wrap_life " ).css("display","none");
		$("#wrap_activity" ).css("display","none");
		$("#outside").css("opacity","1");
		$("#teach").css("opacity","0.7");
		$("#life").css("opacity","0.7");
		$("#activity").css("opacity","0.7");
	});


	$("#teach").click(function(){
		$("#wrap_outside").css("display","none");
		$("#wrap_teach " ).css("display","block");
		$("#wrap_life " ).css("display","none");
		$("#wrap_activity" ).css("display","none");
		$("#outside").css("opacity","0.7");
		$("#teach").css("opacity","1");
		$("#life").css("opacity","0.7");
		$("#activity").css("opacity","0.7");

	});

	$("#life").click(function(){
		$("#wrap_outside").css("display","none");
		$("#wrap_teach " ).css("display","none");
		$("#wrap_life " ).css("display","block");
		$("#wrap_activity" ).css("display","none");
		$("#outside").css("opacity","0.7");
		$("#teach").css("opacity","0.7");
		$("#life").css("opacity","1");
		$("#activity").css("opacity","0.7");
	});

	$("#activity").click(function(){
		$("#wrap_outside").css("display","none");
		$("#wrap_teach " ).css("display","none");
		$("#wrap_life" ).css("display","none");
		$("#wrap_activity").css("display","block");
		$("#outside").css("opacity","0.7");
		$("#teach").css("opacity","0.7");
		$("#life").css("opacity","0.7");
		$("#activity").css("opacity","1");
	});

	$("#img_section li").mouseenter(function(){
		$("img_section li").css("opacity","1")
	});

	$("#img_section li").mouseleave(function(){
		$("img_section li").css("opacity","0.7")
	});
