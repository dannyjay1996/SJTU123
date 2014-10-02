var screen_width = screen.width;
var left = false;
var right = false;
var current_pos = 1;
var current = "";
var next = "";
$(document).ready(function(){

	$(".img_wrap_section").mouseleave(function(event){
		var e = event || window.event;
		if(e.clientX > screen_width/2){
			$("#right_pro").fadeTo("fast",0.85);
			right = true;
		}
		else{
			$("#left_pro").fadeTo("fast",0.85);
			left = true;
		}
	});

	$(".img_wrap_section").mouseenter(function(){
		$("#right_pro").fadeTo("fast",0.15);
		$("#left_pro").fadeTo("fast",0.15);
		left = false;
		right = false;
	});

	$("#left_pro").mouseenter(function(){
		$("#left_pro").fadeTo("fast",0.85);
		left = true;
	});

	$("#left_pro").mouseenter(function(){
		$("#right_pro").fadeTo("fast",0.85);
		right = true;
	});


	$(".img_wrap").click(function(){
		if(left){
			switch(current_pos){
				case 1: 
					current = "#wrap_outside";
					next = "#wrap_activity";
					break;
				case 2:
					current = "#wrap_activity";
					next = "#wrap_life";
					break;
				case 3:
					current = "#wrap_life";
					next = "#wrap_teach";
					break;
				case 4:
					current = "#wrap_teach";
					next = "#wrap_outside";
					break;
				default:
					break;
			}
			current_pos = current_pos-1;
			if(current_pos == 0)current_pos = 4;

			$(next+" img").animate({marginLeft: "-=50px"},"fast");
			$(current+" img").animate({opacity:"0", marginLeft: "+=50px"},"fast",function(){
				$(current).hide();
				$(next).show();
				$(next+" img").animate({opacity:"1", marginLeft: "+=50px"},"fast",function(){
				$(current+" img").animate({marginLeft: "-=50px"},"fast");
				});
			});
		}
		else if(right){
			switch(current_pos){
				case 1: 
					current = "#wrap_outside";
					next = "#wrap_teach";
					break;
				case 2:
					current = "#wrap_teach";
					next = "#wrap_life";
					break;
				case 3:
					current = "#wrap_life";
					next = "#wrap_activity";
					break;
				case 4:
					current = "#wrap_activity";
					next = "#wrap_outside";
					break;
				default:
					break;
			}

			current_pos = current_pos+1;
			if(current_pos == 4)current_pos = 1;

			$(next+" img").animate({marginLeft: "-=50px"},"fast");
			$(current+" img").animate({opacity:"0", marginLeft: "+=50px"},"fast",function(){
				$(current).hide();
				$(next).show();
				$(next+" img").animate({opacity:"1", marginLeft: "+=50px"},"fast",function(){
				$(current+" img").animate({marginLeft: "-=50px"},"fast");
				});
			});
		}

	});
});
