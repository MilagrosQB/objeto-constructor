window.addEventListener("load", function() {
	var boton = document.getElementById("enviar");
	boton.addEventListener("click", 
		function () {
			var nombre = document.getElementById("nombre").value;
			var edad = parseInt(document.getElementById("edad").value);
			var sexo = document.getElementById("sexo").value;

		function Persona(nombre, edad, sexo, mayorDeEdad) {
		  	this.nombre = nombre;
		  	this.edad = edad;
		  	this.sexo = sexo;
		  	this.mayorDeEdad = (this.edad >= 18);
		  	this.presentacion = function() {
		  		var mensaje = "Hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años, y soy "+ ((this.mayorDeEdad) ? "mayor" : "menor") + " de edad.";
		    	return mensaje;
  			}
  		}
		
		var nuevaPersona = new Persona(nombre, edad, sexo);
		document.getElementById("frase").innerHTML = nuevaPersona.presentacion();
	});
});










/* mayorDeEdad = (edad >= 18) 
 
if(edad >= 18) {
	mayorDeEdad =true;
}else {
		mayorDeEdad=false
}
}*/