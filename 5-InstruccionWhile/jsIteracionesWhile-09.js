/* Nuñez, Jimena Div H
     While 09
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numeroIngresado;
	var maximo;
	var minimo;
	var seguir;
	var primerNumeroIngresado;

	seguir=true;
	primerNumeroIngresado=false;

	while(seguir==true)
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>maximo || primerNumeroIngresado==false)
		{
			maximo=numeroIngresado;
		}
		if(numeroIngresado<minimo || primerNumeroIngresado==false)
		{
			minimo=numeroIngresado;
			primerNumeroIngresado=true;
		}
		seguir=confirm("Quiere reingresar otro numero: ");
	}

	txtIdMaximo.value=maximo;
	txtIdMinimo.value = minimo;
}//FIN DE LA FUNCIÓN

/*
// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var seguir;
	//iniciar variables
	banderaDelPrimero="es el primero";
	seguir='si';
	while(seguir=="si")
	{
		
		seguir=prompt("desea continuar?");
	} */