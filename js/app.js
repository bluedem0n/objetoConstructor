window.addEventListener("load", function() {
	var boton = document.getElementById("mostrar");
	boton.addEventListener("click", function() {
		var nombre = document.getElementById("nombre").value;
		var edad = parseInt(document.getElementById("edad").value);
		var sexo = document.getElementById("sexo").value;
		var persona = new Persona(nombre, edad, sexo);
		document.getElementById("resultado").innerHTML = persona.presentacion();
		document.getElementById("nombre").value;
		document.getElementById("edad").value;
		document.getElementById("sexo").value;
	});
	function Persona(nombre, edad, sexo) {
	 	this.nombre = nombre;
	 	this.edad = edad;
	 	this.sexo = sexo;
	 	this.mayorDeEdad = (this.edad >= 18);
	 	this.presentacion = function() {
	 		var respuesta = "Hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años, mi sexo es " + this.sexo + " y soy " + ((this.mayorDeEdad) ? "mayor" : "menor") + " de edad.";
	 	return respuesta;

  		};
	}
});