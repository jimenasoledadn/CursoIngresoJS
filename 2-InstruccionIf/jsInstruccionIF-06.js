/* Nuñez Jimena Div H
IF 06
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */
function mostrar()
{
	var edad;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad>=18)
	{
		alert("Es mayor de edad");
	}

	if(edad<13)
	{
		alert("Es menor de edad");
	}

	if(edad>=13 && edad<=17)
	{
		alert("Es adolescente");
	} 
	
}//FIN DE LA FUNCIÓN
//txtIdEdad 

