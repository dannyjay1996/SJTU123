var search = document.getElementById("search");            
var forms = document.getElementsByTagName("form");       

$(document).ready(function(){
	$(".tabLine #baidu").click(function(){
		forms[0].style.display = "block"; 
		forms[1].style.display = "none"; 
		$("#baidulogo").style.display = "block"; 
		$("#googlelogo").style.display = "none"; 
	}

	$(".tabLine #google").click(function(){
		forms[0].style.display = "none"; 
		forms[1].style.display = "block"; 
		$("#baidulogo").style.display = "none"; 
		$("#googlelogo").style.display = "block"; 
	}
}