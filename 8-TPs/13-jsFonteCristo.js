/* Nuñez, Jimena Div H
    While Tp13
El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está 
  pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar 
       las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares 
       desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares
       desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles
       de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos 
       desde el número ingresado hasta el cero.
*/


function NumerosPares()
{
 	var numeroIngresado;
 	var cantNumerosPares;

 	cantNumerosPares=true;

 	numeroIngresado=txtIdNumero.value;
 	numeroIngresado=parseInt(numeroIngresado);
 	cantNumerosPares=numeroIngresado/2;

 	alert("La cantidad de numeros pares desde el " +numeroIngresado+ " hasta el cero, es: " + cantNumerosPares);
}

/*
 	if(numeroIngresado>0 || numeroIngresado==true)
 	{
 		numeroIngresado=txtIdNumero.value;
 		numeroIngresado=parseInt(numeroIngresado);
 		cantNumerosPares=numeroIngresado/2;
	}
		alert("La cantidad de numeros pares desde el " +numeroIngresado+ " hasta el cero, es: " + cantNumerosPares);

	 	while(numeroIngresado<0)
 		{
 			
 		}
	*/
 }
 function  NumerosImpares()
 {
 	var numeroIngresado;
 	var cantNumerosImpares;
 }
 /*
 txtIdNumero
 

 NumerosDivisibles()
 VerificarPrimo()
 NumerosPrimos() 
 */