// function

greeting ();
function greetings() {
	console.log("Good Morning!");
}

// parenthesis invokes our functions so that it runs the code 
inside of it greetings();

// Challeng, Create a function that says "Day 4 feeling great!" then call that function



function greeting2(name){
	console.log("Time to start coding" + name);
}


greeting2("Jay");



// scope
// Void Function
function sum2(num1 + num2){
	console.log (num1 + num2)
}

sum (3,4)
// Function with parameters





var fname = "Aj"

function hello (fname){
	console.log(fname +lname)//
}
console.log(lname);//won't run

hello();


if(1==1){
	let sum = 1+1
	console.log(sum);//2
}

console.log(sum);//err

//Create a function called capitalize() and use the for loop we created
yesterday to // captilize names.

function captilize(studentName){
	var newName = "";
	for(var 1 in studentName){
		console.log(typeof(1))
		if(1 ==0){
			// What happens if we use 3 equals?

			newName = studentName[1].toUpperCase();
		}else {
			newName+= studentName[1];
		}

		}
	return newName
}

 console.log(capitalize('ken'))