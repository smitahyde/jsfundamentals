let input = document.getElementById("input");
let output = document.getElementById("output");
let ulist = document .getElementById("friendList");
//console.log(input.value);
let newName = "";
function capitalize() {
	for (let l in input.value){
		if (l == 0) {
			newName = input.value[l].toUpperCase();
			} else {	
				newName += input.value [l].toLowerCase();
		}
		
	}
	output.innerHTML = "Captilized Name:" + newName;
	input.value=""
	addItem(newName);
}

input.onkeypress = function(e){
	if (e.keyCode === 13){
		return capitalize();

function addItem(name){
	let li = document.createElement('li');
	li.innerHTML = newName;

	ulist.appendChild(li);
}

input.onkeypress = function(e){
	if (e.keyCode === 13){
		return capitalize();
	}

}


	


// Chanllenge: find out how to do have a conditional target the 'enter key'
// so that once it's pressed it can submit the form.

// challenge 2: after a name is captialized make sure you clear the form.

// challenge3: create an ul list that prints out each name that a user wants to capitalize without bullet points.

