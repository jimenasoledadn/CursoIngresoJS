/* Nuñez, Jimena Div H
    Switch 08
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */
function mostrar()
{
	var destinoIngresado 
	destinoIngresado=txtIdDestino.value;

	switch(destinoIngresado)
	{
		case"Bariloche":
		alert("Frio");
		break;
		case"Cataratas":
		alert("Calor");
		break;
		case"Ushuaia":
		alert("Frio");
		break;
		default:
		alert("Calor");
		break;
	}


}//FIN DE LA FUNCIÓN




