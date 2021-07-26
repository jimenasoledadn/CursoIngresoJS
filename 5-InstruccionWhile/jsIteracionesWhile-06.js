/* Nuñez Jimena Div 
     While 06
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */
function mostrar()
{
	var contador;
	var suma; //acumulador
	var numeroIngresado;

	contador=0;
	suma=0; // antes acumulador=0

	while(contador<5) //Me dice hasta cuantos numeros va a pedir, en este caso 5
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		suma = suma + numeroIngresado; /*Siempre adentro del While, para que vaya sumando a 
		                                  medida que el usuario ingresa los nros. */
		contador = contador +1; //cuanta la cant de vcs, para que se cumpla <5
	}
	txtIdSuma.value=suma;
	txtIdPromedio.value=suma/contador; 
}//FIN DE LA FUNCIÓN