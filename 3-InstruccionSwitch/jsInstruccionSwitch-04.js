/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
function mostrar()
{
	//tomo el mes
	var mesDelAño;
	mesDelAño=txtIdMes.value;

	switch(mesDelAño)
	{
		case"Febrero":
		alert("Tiene 28 días");
		break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert("Tiene 31 días");
		break;
		default:
		alert("Tiene 30 días");

	} 

	/*mesDelAño=txtIdMes.value;
	alert(mesDelAño); */
	
	



}//FIN DE LA FUNCIÓN