var imgs=document.getElementsByClassName("item-img");
var alll=document.querySelector(".all");
var child=document.querySelector(".child");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var close=document.getElementById("wclose");
var myar=[];
var index=0;
for(var i=0;i<imgs.length;i++){
	myar.push(imgs[i]);
	imgs[i].addEventListener("click",function(info){
	  alll.classList.add("show");	

		var see =info.target.src;
		child.style.backgroundImage="url("+see+")";
		index=myar.indexOf(info.target)
		console.log(info)
	})
};
next.addEventListener("click",function(){
    come();
})
 function come(){
		index ++;
	if(index == myar.length){
	   index=0;
	   }
	child.style.backgroundImage="url("+myar[index].src+")"; 
	 
 
	 
 }
prev.addEventListener("click",function(){
	back()
})
function back(){
	index --;
	   if(index<0){
		index=myar.length-1;
	   }
	child.style.backgroundImage="url("+myar[index].src+")"
}
close.addEventListener("click",function(){
	
	 alll.classList.remove("show");	
	
})
document.addEventListener("keydown",function(info){
	
	if(info.keyCode==27){
		 alll.classList.remove("show");	
	}
})
document.addEventListener("keydown",function(e){
	
	if(e.keyCode==39){
		come();

	}
	
})

document.addEventListener("keydown",function(e){
	
	if(e.keyCode==37){
		back();
	}
	
	
})

alll.addEventListener("click",function(e){
	
	    if(e.target==alll){
		 alll.classList.remove("show");	
		
	}
	
	
	
})







