// Arrays 

let students = ['Thomas', 'Madyson', 'Brandon','Leon', 23, true,
['Jackson', 'Perry']];

console.log(typeof (students));

console.log(students[2])

// Grab the nested array out of the students array and grab 'Perry' then print
// to the console "Hello Perry the Platypus."

console.log("Hello"+ students[6][1]+ "the Platypus.");

Let arrOfFood = ['Quesadilla', 'Pecan Pie', 'CheeseCake', 'Shrimp Pasta'];

// Prints out the value instead of the index number


arrOfFood.push ('NY Style Pizza');

// index of item|How many to cut | What you want to replace it with

arrOfFood.splice(1, 1, 'Blueberry Pie');
arrOfFood.splice(2,0 'Sweet Potato');
arrOfFood.splice(4,2);
arrOfFood.pop ();

for(let foodItem of arrOfFood){
	console.log(foodItem);
//}

arrOffood.forEach(function(foodItem, banana){
	console.log(banana)
	console.log(foodItem);
})


