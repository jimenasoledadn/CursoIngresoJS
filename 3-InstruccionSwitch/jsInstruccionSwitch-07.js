/* Nuñez, Jimena Div H
    Switch 07
    Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde
     se encuentra Norte, Sur, Este u Oeste */
function mostrar()
{
	var destinoIngresado 

	destinoIngresado=txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		alert("Se encuentra al Oeste.");
		break;
		case "Cataratas":
		alert("Se encuentra al Norte de nuestro país.");
		break;
		case "Mar del plata":
		alert("Se encuentra al Este de nuestro país");
		break;
		case "Ushuaia":
		alert("Se encuentra al Sur de nuestro país.");

	}


}//FIN DE LA FUNCIÓN

