/* Nuñez, Jimena Div H
    Switch 05
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.". */
function mostrar()
{
	//tomo la hora
	var horaDelDia 
	horaDelDia=txtIdHora.value;

	switch(horaDelDia)
	{
		case"7":
		case "8":
		case "9":
		case "10":
		case "11":
		alert("Es de mañana");
		break;
		default:
		alert("No es de mañana");

	}


}//FIN DE LA FUNCIÓN