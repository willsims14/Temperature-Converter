// Get a reference to the button element in the DOM
var button = document.getElementById("submitButton");
button.addEventListener("click", determineConverter);

var userTemp = document.getElementById("userTemp").value;

var fRadio = document.getElementById("fahrenheit");
var cRadio = document.getElementById("celsius");


function toCelsius (temp) {
	newTempLocation = document.getElementById("convertedTemp");
	var newTemp = (temp - 32) * (5/9);
	newTempLocation.innerHTML += "<strong>" + newTemp.toFixed(2) + "<strong>";
	assignColor(newTemp, "C");
}

function toFahrenheit (temp) {
	newTempLocation = document.getElementById("convertedTemp");
	var newTemp = (temp * 9/5) + 32;
	newTempLocation.innerHTML += "<strong>" + newTemp.toFixed(2) + "<strong>";
	assignColor(newTemp, "F");
}

// Executes after temperature conversion
// Assigns color based off of newly converted temperature
function assignColor(temp, mesurementStyle){
	newTempLocation = document.getElementById("convertedTemp");

	if(mesurementStyle === "C"){
		if(temp > 32){
			newTempLocation.style.backgroundColor = "red";
		}else if(temp < 0){
			newTempLocation.style.backgroundColor = "lightblue";
		}else{
			newTempLocation.style.backgroundColor = "lightgreen";
		}
	}
	if(mesurementStyle === "F"){
		if(temp > 90){
			console.log("FAHR > 90");
			newTempLocation.style.backgroundColor = "red";
		}else if(temp < 32){
			console.log("FAHR < 32");
			console.log("Temp: ", temp);
			newTempLocation.style.backgroundColor = "lightblue";
		}else{
			console.log("FAHR 32 - 90");
			newTempLocation.style.backgroundColor = "lightgreen";
		}
	}
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	userTemp = document.getElementById("userTemp").value;

	if(fRadio.checked){
		toFahrenheit(userTemp);
		console.log("FAHRENHEIT");
		return;
	}else if(cRadio.checked){
		toCelsius(userTemp);
		console.log("CELSIUS");
		return;
	}else{
		return;
	}
	console.log("Input: ", userTemp);
}
