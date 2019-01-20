function lunbo(a,b){
	 let topLis = document.querySelectorAll(a);
	        let bottomLis = document.querySelectorAll(b);
	        topLis.forEach(function(val, index) {
	        	//全部添加点击事件
	        	val.onclick = function() {
	
	        		bottomLis.forEach(function(val, key) {
	        			//去掉上面所有li的选择状态
	        			topLis[key].style.color = "#585858";
	        			//全部隐藏下面的li,
	        			val.style.display = "none";
	        		});
	        		//显示对应的下面的li
	        		bottomLis[index].style.display = "block";
	        		//给对应的上面的li上色
	        		topLis[index].style.color = "#ff6700";
	        		// topLis[index].style.border-bottom = "1px solid #ff6700";
	        	}
	        });
}
lunbo(".household-top2s span",".household-bottoms")
lunbo(".household-top2s-1 span",".household-bottoms-1")

 let lunLmglis=document.querySelectorAll(".banner-img li");
 let lunLeft=document.querySelector(".banner-jiantouleft");
 let lunRight=document.querySelector(".banner-jiantouright");
 let lunPoints=document.querySelectorAll(".banner-dian div");
 let lunBig=document.querySelector(".banner");
 let lunN=0;
 let lunSize=lunPoints.length-1;
 let lunTime=setInterval(function(){
 	lunN++;
 	move();
 },2000);
 function move(){
 	if(lunN>lunSize){
 		lunN=0;
 	}else if(lunN<0){
 		lunN=lunSize;
 	}
 	lunLmglis.forEach((val,index)=>{ 		val.classList.remove("active");
 		lunPoints[index].classList.remove("active");
 	});
 	lunLmglis[lunN].classList.add("active");
 	lunPoints[lunN].classList.add("active");
 	console.log(lunN);
 }
 lunBig.onmouseover=function(){
  	clearInterval(lunTime);
  }
 lunBig.onmouseout=function(){
	lunTime=setInterval(function(){
  		lunN++;
  		move();
  	},2000);
  }
 lunLeft.onclick=function(){
  	lunN--;
  	move();
 }
 lunRight.onclick=function(){
  	lunN++;
  	move();
 }

//闪购
let flashLeft=document.querySelector(".topx2r-1 i");
let flashRight=document.querySelector(".topx2r-2 i");
let flashUl=document.querySelector(".flash-bottom-right .clear");
let flashLis=document.querySelectorAll(".flash-bottom-right .clear li");
let flashN=0;
let flashSize=flashLis.length-4;
flashRight.onclick=function(){
	flashN=flashN+4;
	flashMove();
}
flashLeft.onclick=function(){
	flashN=flashN-4;
	flashMove();
}
function flashMove(){
	if(flashN>flashSize){
		flashN=flashSize
	}
 	if(flashN<0){
 		flashN=0;
 	}		
	flashUl.style.left=-(flashN*248)+"px";
}
//内容
function select(parents){
	let selLeft=document.querySelector(parents+" .jiantou .left i");
	let selRight=document.querySelector(parents+" .jiantou .right i");
  let selDian=document.querySelectorAll(parents+" .bot div")
	console.log(selDian.length);
}
select(".por-product .content-bottom .del")