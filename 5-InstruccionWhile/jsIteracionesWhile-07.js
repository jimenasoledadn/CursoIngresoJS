/* Nuñez Jimena Div H
   While 07
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var suma;
	var seguir;
	contador=0;
	suma=0;
	seguir=true;

	while(seguir==true)
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado) || (numeroIngresado<0 || numeroIngresado>100))
		{
			numeroIngresado=prompt("Error.. Reingrese un numero entre 0 y 100: ");
			numeroIngresado=parseInt(numeroIngresado);
		}
		suma=suma+numeroIngresado;
		contador = contador+ 1;
		seguir=confirm("Ingresar otro numero?");
	}
	txtIdSuma.value=suma;
	txtIdPromedio.value=(suma/contador).toFixed(2);




	
}//FIN DE LA FUNCIÓN

/*
function mostrar()
{
	var numeroIngresado;
	var contador;
	var suma;
	var seguir;
	contador=0;
	suma=0;
	seguir="si";

	while(seguir=="si")
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		suma=suma+numeroIngresado;
		contador = contador+ 1;
		seguir=prompt("Ingresar otro numero? si/no ");
	}
	txtIdSuma.value=suma;
	txtIdPromedio.value=suma/contador; */
