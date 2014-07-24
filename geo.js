

var geo=navigator.geolocation;


function geo_error(){
	console.log("ohh..... No te pude Localizar!!!!");
}

function geo_exito(posicion){
	console.log(posicion);
}

var opciones={};

geo.getCurrentPosition(geo_exito,geo_error,opciones);