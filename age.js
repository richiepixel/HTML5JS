
window.addEventListener('load', function(){
	var button = document.getElementById('ageButton');
	button.addEventLister('click', function (){
		var age = parseInt(ageInputElement.value, 10);
		var result = "";

		if (isNaN (age)){
  			result = "Input a number please";
		} else{
  				result((100 - age) + "years before you turn 100!");
		}

		console.log(result);
		ageOutputElement.innerHTML = result;

	}, false);
}, false);





