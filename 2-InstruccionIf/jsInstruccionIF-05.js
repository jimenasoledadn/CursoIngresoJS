/* Nuñez Jimena Div H
IF 05 
Al ingresar una edad solo debemos informar si la persona NO es adolescente. */

function mostrar()
{
	var edad

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad<13 || edad>17)
	{
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN //

