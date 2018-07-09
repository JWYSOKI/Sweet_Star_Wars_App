"use strict";
function getNewCharacter (){
var characterBasicInfoAjaxRequest = $.ajax("https://swapi.co/api/people")

characterBasicInfoAjaxRequest.done(function(data){

	var charactersArray = data.results

	var randomCharacter = Math.floor(Math.random()* charactersArray.length)

	var character = charactersArray[randomCharacter]
	
	displayCharacterData(character)
})
}

$("#getNewCharacterButton").click(getNewCharacter);

$("document").ready(getNewCharacter)

function displayCharacterData(char){

	$("#character_info").html("")

	var characterInfo = ""
	characterInfo += "<h1> Character: " + char.name + "</h1>"
	characterInfo += "<p> Gender: " + char.gender + "</p>"
	characterInfo += "<p> Hair Color: " + char.hair_color + "</p>"
	characterInfo += "<p> Height in Centimeters: " + char.height + "</p>"
	characterInfo += "<p> Weight in Kilograms: " + char.mass + "</p>"
	characterInfo += "<p> Skin Color: " + char.skin_color + "</p>"
	characterInfo += "<p> Eye Color: " + char.eye_color + "</p>"
	characterInfo += "<p> Birth Year: " + char.birth_year + "</p>"


	$("#character_info").append(characterInfo)

};


