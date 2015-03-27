function events() {
	var coinOpt_K = document.getElementById("coinOpt_K").innerHTML;
    var coinOpt_M = document.getElementById("coinOpt_M").innerHTML;
    var verdict_1 = document.getElementById("verdict_1").innerHTML;
    var verdict_2 = document.getElementById("verdict_2").innerHTML;
    var _list1 = [coinOpt_K, coinOpt_M];
    var _list2 = [verdict_1, verdict_2];
    
    for (var i = 0; i < _list.length; i++) {
    	_list1[i].addEventListener("click", function() {
    		user_input = this.innerHTML;
    });
    
    function get_coinState() {
		var random_int = Math.random();
		var coin_state = "Error";
				
		if (random_int < 0.5) {
			coin_state = "Kron";
		} 
				
		else if (random_int > 0.5) {
			coin_state = "Mynt";
		}
				
		else {
			coin_state = "Kron";
		}
		
		return coin_state;
	}
}

function coinFlip_animate() {
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = document.getElementById("coin") + "{transform: rotateY(180deg);}";
	document.body.appendChild(css);
}

if (user_input == get_coinState()) {
	document.getElementById(_list2[0]).style.display = 'block';
	document.getElementById(_list2[1]).style.display = 'none';
} else {
	document.getElementById(_list2[0]).style.display = 'none';
	document.getElementById(_list2[1]).style.display = 'block';
}




