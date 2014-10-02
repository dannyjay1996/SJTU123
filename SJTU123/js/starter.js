var search = document.getElementById("search");           
var forms = document.getElementsByTagName("form");            
var ul = search.getElementsByTagName("ul")[0];            
var li = ul.getElementsByTagName("li");            
var length = li.length; 
var baidu = document.getElementById("baidu");
var google = document.getElementById("google");        
var baidulogo = document.getElementById("baidulogo");     
var googlelogo = document.getElementById("googlelogo");        
/*		li[0].onclick = function() {               
	for (var i = 1; i < length; i++) {                   
		li[i].style.display = "block"; }}            
	var n = 0;            
	for (var i = 1; i < length; i++) {                
		li[i].onclick = function(a) {

		return function() {
		

		li[0].innerHTML = this.innerHTML;                       
	for (var j = 1; j < length; j++) {
		li[j].style.display = "none"; }                        
		forms[n].style.display = "none";                        
		forms[a].style.display = "block"; 
		n = a; } }(i - 1);                
		li[i].onmouseover = function(){ 
			this.style.border = "#7fb80e 1px solid";                
			this.style.background = "#f2eada"; }                
		li[i].onmouseout = function(){  
			this.style.border = "0px";                
			this.style.background = "inherit";}}*/
  

	baidu.onclick=function(){
		forms[0].style.display = "block"; 
		forms[1].style.display = "none"; 
		baidulogo.style.display = "block"; 
		googlelogo.style.display = "none"; 
	};

	google.onclick=function(){
		forms[0].style.display = "none"; 
		forms[1].style.display = "block"; 
		baidulogo.style.display = "none"; 
		googlelogo.style.display = "block"; 
	};


/*var img =document.getElementById("img_wrap");
var section=img.getElementsByTagName("ul")[0];
var selection = section.getElementsByTagName("li");
var length = selection.length;
var wrap = img.getElementsByTagName("ul");

	/*for(var i=0;i<length;i++){
		selection[i].onclick=function(){
			for(var j=1;j<=length;j++){
				wrap[j].hide();
			}
			
			var k=i+1;
			wrap[k].show();
		}

		selection[i].onmouseover = function(){ 
    			selection[i].background="#FFFFFF";
			 }                
		selection[i].onmouseout = function(){  
			selection[i].background="#cecece";
			}
	};     */


