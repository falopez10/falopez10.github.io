"use strict";

/*eslint-env jquery*/

$(document).ready(main);

function main(){
	seti18n();
	sobreMiDinamico();
	lenguajeEscogido();
	resaltarIntereses();
}

//Function translating texts into preferred language for browser
function seti18n(lang){
	//get preffered language
	if(!lang)
		lang = navigator.language || navigator.userLanguage;
	console.log("lang",lang);
	// get json file for specific language and manipulate data
	$.getJSON("../i18n/"+lang.substring(0,2)+".json",(data)=>{
		for(let propt in data){
    	let elements = $("."+propt);
    	if(!elements)	continue;
    	// change text for each element matching the class
    	elements.text(data[propt]);

		}
	});
}

//function highlighting text in "about me" section
function sobreMiDinamico(){
	$("#about-me > .my-auto > p.mb-5").hover(function(){
    $(this).css("font-weight", "Bold");
  }, function(){
    $(this).css("font-weight", "Normal");
  });
}
//function showing programming language/tool in "skills"
function lenguajeEscogido(){
	$("#lenguaje-escogido").hide();
	$("#skills > div > ul.list-inline.list-icons > .list-inline-item > i").hover(function(){
		//guardamos el nombre del lenguaje
    var texto = $(this).attr("class");
		var lenguaje = texto.split("-")[1];
		//se asigna lenguaje a texto de lenguaje escogido
		$("#lenguaje-escogido").text(lenguaje);
		$("#lenguaje-escogido").slideToggle();
	}, function(){
		$("#lenguaje-escogido").toggle();
		
	});
}

//Resalta intereses
function resaltarIntereses(){
	$("#intereses > div > p").hover(function(){
		$(this).css("font-weight", "Bold");
	}, function(){
		$(this).css("font-weight", "Normal");
	});
}

