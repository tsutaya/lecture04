var endFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);

	foxkeh.setAttribute("class", "");
};//documentでslidein-foxkeh imgを指定し動作が終了される。

var endSlideinFoxkehAndStartFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	foxkeh.setAttribute("class", "flip");
	foxkeh.addEventListener("animationend", endFlipFoxkeh);

	
};//documentでslidein-foxkeh imgを指定しスライドが終わるとフリップする。フリップの動作が終わるとendFlipFoxkeh に移る。

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
};//documentでslidein-foxkeh imgを指定しイメージがスライドする。スライドの動作が終わるとendSlideinFoxkehAndStartFlipFoxkehに移る。

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//documentでslide-foxkeh buttonを指定していてクリックされるとstartslideinFoxkehに移る。
