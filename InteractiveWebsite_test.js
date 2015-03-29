//Denne funksjonen skal opnes med en gang siden laster
function events() {
    var coinOpt_K = document.getElementById("coinOpt_K").innerHTML; //lager en variabel for valget -kron
    var coinOpt_M = document.getElementById("coinOpt_M").innerHTML; //lager en variabel for valget -mynt
    var verdict_1 = document.getElementById("verdict_1").innerHTML; //lager en variabel for "du har vunnet" teksten
    var verdict_2 = document.getElementById("verdict_2").innerHTML; //lager en variabel for "du har tapt" teksten
    
    //setter variablene i array'er
    var _list1 = [coinOpt_K, coinOpt_M];
    var _list2 = [verdict_1, verdict_2];
    
    //finner ut om det faktisk blir kron/mynt
    for (var i = 0; i < _list.length; i++) {
    	_list1[i].addEventListener("click", function() {
    		user_input = this.innerHTML;
    });
    
    //finner ut om det faktisk blir kron/mynt
    function get_coinState() {
		var random_int = Math.random();
		var coin_state = "Error";
				
		if (random_int < 0.5) {
			coin_state = "Kron";
		} 
				
		else if (random_int > 0.5) {
			coin_state = "Mynt";
		}
		
		//visste ikke hva jeg skulle gjøre hvis Math.random() = 0.5				
		else {
			coin_state = "Kron";
		}
		
		return coin_state;
	}
}

//legger til en CSS animasjon for å flippe mynt div'en
function coinFlip_animate() {
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = document.getElementById("coin").innerHTML + "{transform: rotateX(180deg);}";
	document.body.appendChild(css);
}

//hvis det du trykket på er lik resultatet av myntkastet, så vis "You Won!", ellers "You Loose!"
if (user_input == get_coinState()) {
	document.getElementById(_list2[0]).style.display = 'block';
	document.getElementById(_list2[1]).style.display = 'none';
} else {
	document.getElementById(_list2[0]).style.display = 'none';
	document.getElementById(_list2[1]).style.display = 'block';
}




