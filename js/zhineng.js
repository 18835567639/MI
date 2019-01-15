        let topLis = document.querySelectorAll(".household-top2s-1 span");
        let bottomLis = document.querySelectorAll(".household-bottoms-1");
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