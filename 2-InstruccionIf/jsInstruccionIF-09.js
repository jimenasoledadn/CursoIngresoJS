/* Nuñez Jimena Div H
     if 09
  Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive */
     
function mostrar()
{
	var variable

	variable = Math.floor(Math.random() * 10) + 1; //Para buscar un numero aleatorio
	variable = parseInt(variable); // NO HACE FALTA, porque para eso esta el Math.floor qe redondea para abajo

	alert (variable);
	//Genero el número RANDOM entre 1 y 10 


}//FIN DE LA FUNCIÓN

/*
Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;
 */