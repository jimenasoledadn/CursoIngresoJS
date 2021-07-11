/*3.Nuñez Jimena Soledad Div H
        TP 3 Ferrete Pinturas.js	
      Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados 
con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
	var fahrenheit;
	var aCentigrados;

	fahrenheit = txtIdTemperatura.value;
	fahrenheit = parseInt(fahrenheit);
	aCentigrados = fahrenheit - 32;
	alert (fahrenheit + " Fahrenheit son " + aCentigrados + " centigrados.");

	
}

function CentigradosFahrenheit () 
{
	var centigrados;
	var aFahrenheit;

	centigrados = txtIdTemperatura.value;
	centigrados = parseInt(centigrados);
	aFahrenheit = centigrados + 32;
	alert (centigrados + " centigrados son " + aFahrenheit + " Fahrenheit.");
	
}

// txtIdTemperatura //