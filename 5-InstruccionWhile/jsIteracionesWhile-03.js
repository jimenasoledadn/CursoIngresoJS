/* Nuñez Jimena Div H
     While 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada=prompt("Ingrese la clave ingresada: ");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error... Reingrese el numero clave: ");
	}
	alert("Ingreso al Sistema");
}//FIN DE LA FUNCIÓN
