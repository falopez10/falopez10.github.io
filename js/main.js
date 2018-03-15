"use strict";

/*eslint-env jquery*/

$(document).ready(main);

function main(){
	sobreMiDinamico();
	lenguajeEscogido();
	resaltarIntereses();
}

//funcion que juega con el texto en "sobre mi"
function sobreMiDinamico(){
	$("#about > .my-auto > p.mb-5").hover(function(){
    $(this).css("font-weight", "Bold");
  }, function(){
    $(this).css("font-weight", "Normal");
  });
}
//funcion que muestra el lenguaje en "habilidades"
function lenguajeEscogido(){
	$("#lenguaje-escogido").hide();
	$("#habilidades > div > ul.list-inline.list-icons > .list-inline-item > i").hover(function(){
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

