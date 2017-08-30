$(document).ready(function(){
	$.ajax({
		type:'GET', 
		url: 'http://swapi.co/api/planets/',

	}).done(function(planets){
		//console.log(planets.result[0].name);
		planets.result.forEach(function(planet){
		})
		
		for(let planet in planets.results){
			console.log(planets.results[planet].name)
		
		}

		for(let planet of planets.results[0].name){
			console.log(data.name)
		}
		
		for(let starship of planet.results){
			console.log(data.name)
		}


	})
	
})