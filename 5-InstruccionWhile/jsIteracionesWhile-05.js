/* Nuñez Jimena Div H
   While 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	while(sexoIngresado!="m" && sexoIngresado!="f")
	{
		sexoIngresado=prompt("Error... Ingrese f o m ");
	}



	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN