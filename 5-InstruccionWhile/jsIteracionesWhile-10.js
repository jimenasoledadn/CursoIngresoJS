/* Nuñez, Jimena Div H
    While 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).

10 bis
10-Maximo de los valores ingresados
11-Minimo de los positivos */

function mostrar()
{
	var numeroIngresado;
	var negativos;
	var positivos;
	var ceros;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadNumerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var positivosMenosNegativos;
	var maximoIngresado;
	var minimoDeLosPositivos;
	var primerNumeroIngresado;
	var primerNumeroPositivo;


	seguir=true;
	sumaNegativos=0; // Los inicializo a los dos porque los dos
	sumaPositivos=0;   // son contadores.
	cantidadNegativos=0;
	cantidadPositivos=0;
	cantidadCeros=0;
	cantidadNumerosPares=0;
	primerNumeroIngresado=true;
	primerNumeroPositivo=true;

	while(seguir==true)
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		     // Si quisiera validarlo entre un rango numerico
		while(isNaN(numeroIngresado) || numeroIngresado<-1000 || numeroIngresado>1000)
		{
			numeroIngresado=prompt("Error.. Reingrese un numero entre -1000 y 1000: ");
			numeroIngresado=parseInt(numeroIngresado);
		} 
		if(numeroIngresado>maximoIngresado || primerNumeroIngresado==true)
		{
			maximoIngresado=numeroIngresado;
			primerNumeroIngresado=false;
		}

		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadNegativos=cantidadNegativos+1;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				cantidadPositivos=cantidadPositivos+1;

				if(numeroIngresado<minimoDeLosPositivos || primerNumeroPositivo==true)
				{
					minimoDeLosPositivos=numeroIngresado;
					primerNumeroPositivo=false;
				}
			}
			else
			{
				cantidadCeros=cantidadCeros+1; //POR QUE ME APARECE EL DOBLE???
			}
		}
		if(numeroIngresado%2==0 && numeroIngresado!=0)
		{
			cantidadNumerosPares++;
		}	
		
		seguir=confirm("Desea ingresar otro numero? ");	
	}
	/*Los promedios van AFUERA de while, xq NO necesito hacer la operacion cada vez que ingreso
		un numero, SI SOLO al finalizar  */
	
	promedioNegativos=sumaNegativos/cantidadNegativos;
	positivosMenosNegativos=sumaPositivos - sumaNegativos;

	document.write("La suma de los negativos es:" + sumaNegativos + "<br>");
	document.write(" La cantidad de los negativos es: " + cantidadNegativos + "<br>");
	document.write(" La suma de los positivos es: " + sumaPositivos + "<br>");
	document.write(" La cantidad de positivos es: " + cantidadPositivos + "<br>");
	document.write(" La cantidad de ceros es: " + cantidadCeros + "<br>");
	// Para que el usuario sepa que no se pudo calcular por falta de ingreso de estos nros.
	if(cantidadNegativos!=0)
	{
		promedioPositivos=sumaPositivos/cantidadPositivos;
		document.write(" El promedio de los positivos es: " + promedioPositivos + "<br>");
	}
	else
	{
		document.write(" El promedio de los positivos no se pudo calcular porque no ingresó ninguno" + "<br>");
	}
	if(cantidadNegativos!=0)
	{
		promedioNegativos=sumaNegativos/cantidadNegativos;
		document.write(" El promedio de los negativos es: " + promedioNegativos + "<br>");
	}
	else
	{
		document.write(" El promedio de los negativos no se pudo calcular porque no ingresó ninguno " + "<br>");
	}
	document.write(" La diferencia entre los numeros positivos y negativos es: " + positivosMenosNegativos + "<br>");
	document.write(" La cantidad de numeros pares es: " + cantidadNumerosPares + "<br>");
	document.write(" El máximo de los numeros ingresados es: " + maximoIngresado + "<br>");
	document.write(" El mínimo de los positivos es: " + minimoDeLosPositivos + "<br>");
}//FIN DE LA FUNCIÓN

	/*if(numeroIngresado!=0 && numeroIngresado>maximoIngresado || primerNumeroIngresado==true)
	{
		maximoIngresado=numeroIngresado;
		document.write(" El máximo de los numeros ingresados es: " + maximoIngresado + "<br>");
		primerNumeroIngresado=false;
	}
	if(numeroIngresado!=0 && numeroIngresado<minimoDeLosPositivos || primerNumeroPositivo==true)
	{
		minimoDeLosPositivos=numeroIngresado;
		document.write(" El mínimo de los positivos es: " + minimoDeLosPositivos + "<br>");
		primerNumeroPositivo=false;
	} */


/*
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos); 
*/

/* COMO LO HICE LA PRIMERA VEZ (ARRIBA VA A IR EL MODIFICADO BIEN!!!)
function mostrar()
{
	var numeroIngresado;
	var negativos;
	var positivos;
	var ceros;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadNumerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var positivosMenosNegativos;

	seguir=true;
	sumaNegativos=0; // Los inicializo a los dos porque los dos
	sumaPositivos=0;   // son contadores.
	cantidadNegativos=0;
	cantidadPositivos=0;
	cantidadCeros=0;

	while(seguir==true)
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadNegativos=cantidadNegativos+1;
		}
		//ACA!!!! tiene que ir un ELSE IF.. asi no realiza siempre las 2 operaciones!
		         a parte va a sumar el cero tmbien!
		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
			cantidadPositivos=cantidadPositivos+1;
		}
		else
		{
			cantidadCeros=cantidadCeros+1; //POR QUE ME APARECE EL DOBLE???
		}
		promedioPositivos=sumaPositivos/cantidadPositivos;
		promedioNegativos=sumaNegativos/cantidadNegativos;
		positivosMenosNegativos=sumaPositivos - sumaNegativos;
		cantidadNumerosPares=

		seguir=confirm("Desea ingresar otro numero? ");	

	}

	document.write("La suma de los negativos es:" + sumaNegativos + "<br>");
	document.write(" La cantidad de los negativos es: " + cantidadNegativos + "<br>");
	document.write(" La suma de los positivos es: " + sumaPositivos + "<br>");
	document.write(" La cantidad de positivos es: " + cantidadPositivos + "<br>");
	document.write(" La cantidad de ceros es: " + cantidadCeros + "<br>");
	document.write(" El promedio de los positivos es: " + promedioPositivos + "<br>");
	document.write(" El promedio de los negativos es: " + promedioNegativos + "<br>");
	document.write(" La diferencia entre los numeros positivos y negativos es: " + positivosMenosNegativos + "<br>");

}//FIN DE LA FUNCIÓN
 */

 /* MODIFICADO BIEN!!! Ejercicio 10!!! El entregado
function mostrar()
{
	var numeroIngresado;
	var negativos;
	var positivos;
	var ceros;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadNumerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var positivosMenosNegativos;

	seguir=true;
	sumaNegativos=0; // Los inicializo a los dos porque los dos
	sumaPositivos=0;   // son contadores.
	cantidadNegativos=0;
	cantidadPositivos=0;
	cantidadCeros=0;
	cantidadNumerosPares=0;

	while(seguir==true)
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
			// Si quisiera validarlo entre un rango numerico
		while(inNaN(numeroIngresado) || numeroIngresado<-1000 || numeroIngresado>1000)
		{
			numeroIngresado=prompt("Error.. Reingrese un numero entre -1000 y 1000: ");
			numeroIngresado=parseInt(numeroIngresado);
		} 
		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadNegativos=cantidadNegativos+1;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				cantidadPositivos=cantidadPositivos+1;
			}
			else
			{
				cantidadCeros=cantidadCeros+1; //POR QUE ME APARECE EL DOBLE???
			}
		}
		if(numeroIngresado%2==0)
		{
			cantidadNumerosPares++;
		}	
		
		seguir=confirm("Desea ingresar otro numero? ");	
	}
	//Los promedios van AFUERA de while, xq NO necesito hacer la operacion cada vez que ingreso
		//un numero, SI SOLO al finalizar  
	
	promedioNegativos=sumaNegativos/cantidadNegativos;
	positivosMenosNegativos=sumaPositivos - sumaNegativos;

	document.write("La suma de los negativos es:" + sumaNegativos + "<br>");
	document.write(" La cantidad de los negativos es: " + cantidadNegativos + "<br>");
	document.write(" La suma de los positivos es: " + sumaPositivos + "<br>");
	document.write(" La cantidad de positivos es: " + cantidadPositivos + "<br>");
	document.write(" La cantidad de ceros es: " + cantidadCeros + "<br>");
	// Para que el usuario sepa que no se pudo calcular por falta de ingreso de estos nros.
	if(cantidadNegativos!=0)
	{
		promedioPositivos=sumaPositivos/cantidadPositivos;
		document.write(" El promedio de los positivos es: " + promedioPositivos + "<br>");
	}
	else
	{
		document.write(" El promedio de los positivos no se pudo calcular " + "<br>");
	}
	if(cantidadNegativos!=0)
	{
		promedioNegativos=sumaNegativos/cantidadNegativos;
		document.write(" El promedio de los negativos es: " + promedioNegativos + "<br>");
	}
	else
	{
		document.write(" El promedio de los negativos no se pudo calcular porque no ingresó ninguno " + "<br>");
	}
	document.write(" La diferencia entre los numeros positivos y negativos es: " + positivosMenosNegativos + "<br>");
	document.write(" La cantidad de numeros pares es: " + cantidadNumerosPares + "<br>");

}//FIN DE LA FUNCIÓN
*/