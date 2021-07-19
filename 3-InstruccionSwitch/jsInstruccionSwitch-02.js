/*Nuñez Jimena Div H
  Ej 02 sitch
  al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio." (Julio y Agosto)
si aún no llego el Invierno: "Falta para el invierno." (marz abr may juni)
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." (sept oct nov dic ene feb)
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */
function mostrar()
{
	//tomo el mes
	var mesDelAño;
	mesDelAño = txtIdMes.value;
	
	switch(mesDelAño)
	{
		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		case"Enero":
		case"Febrero":
		alert("Ya pasamos el frio, ahora calor!!!");
		break;
		case"Marzo":
		case"Abril":
		case"Mayo":
		case"Junio":
		alert("Falta para el Invierno");
		break;
		default:
		alert("Abrigate que hace frio");
	} 




}//FIN DE LA FUNCIÓN