/* Nuñez, Jimena Div H
   Tp 12 .. While

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide 
realizar una carga de datos validada e ingresada por ventanas emergentes solamente
 (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBruto;
 	var numeroDeLegajo;
 	var nacionalidad;
// A
 	edadIngresada=prompt("Ingrese su edad: ");
 	while(edadIngresada<18 || edadIngresada>90)
 	{
 		edadIngresada=prompt("Usted debe tener entre 18 y 90 años:");
 	}
 	txtIdEdad.value=edadIngresada;
// B
 	sexoIngresado=prompt("Ingrese su sexo: f para femenino ó m para masculino");
 	while(sexoIngresado!="f" && sexoIngresado!="m")
 	{
 		sexoIngresado=prompt("Reingrese sólo m ó f:");
 	}
 	if(sexoIngresado=="f")
 	{
 		sexoIngresado="femenino";
 		txtIdSexo.value=sexoIngresado;
 	}
 	else
 	{
 		if(sexoIngresado=="m")
 		{
 			sexoIngresado="masculino";
 			txtIdSexo.value=sexoIngresado;
 		}
 	}
// C
 	estadoCivilIngresado=prompt("Ingrese un número, según su estado civil: 1-soltero/a; 2-casado/a; 3-divorciado/a; 4-viudo/a");
 	while(estadoCivilIngresado<1 || estadoCivilIngresado>4)
 	{
 		estadoCivilIngresado=prompt("Reingrese un numero: 1-Soltero, 2-Casado, 3-Divorciado ó 4-Viudo");
 	}
 		if(estadoCivilIngresado=="1")
 		{
 			estadoCivilIngresado="Soltero/a";
 			txtIdEstadoCivil.value=estadoCivilIngresado;
 		}
 		else
 		{
 			if(estadoCivilIngresado=="2")
 			{
	 			estadoCivilIngresado="Casado/a";
 				txtIdEstadoCivil.value=estadoCivilIngresado;
 			}
 			else
 			{
 				if(estadoCivilIngresado=="3")
 				{
		 			estadoCivilIngresado="Divorciado/a";
 					txtIdEstadoCivil.value=estadoCivilIngresado;
 				}
 				else
 				{
 					if(estadoCivilIngresado=="4")
 					{
			 			estadoCivilIngresado="Viudo/a";
 						txtIdEstadoCivil.value=estadoCivilIngresado;
 					}
 				}
 			}
 		}
// D
	sueldoBruto=prompt("Ingrese su Sueldo Bruto:");
	while(sueldoBruto<8000)
	{
		sueldoBruto=prompt("Reingrese, debe ser mayor a 8000");
	}
	txtIdSueldo.value=sueldoBruto;
// E
	numeroDeLegajo=prompt("Ingrese su Número de Legajo:");
	while(numeroDeLegajo<1000 || numeroDeLegajo>10000)
	{
		numeroDeLegajo=prompt("Error.. Su número de legajo debe tener 4 cifras:");
	}
	txtIdLegajo.value=numeroDeLegajo;
// F
	nacionalidad=prompt("Indique su nacionalidad, a-argentino/a b-extranjero/a c-nacionalizado/a: ");
	while(nacionalidad=="a" || nacionalidad=="e" || nacionalidad=="n")
	{
		nacionalidad=prompt("Indique a, b ó c: a-argentino/a b-extranjero/a c-nacionalizado/a");
	}
		if(nacionalidad=="a")
		{
			nacionalidad="Argentina/o";
			txtIdNacionalidad.value=nacionalidad;
		}
		else
		{
			if(nacionalidad=="b")
			{
				nacionalidad="Extranjera/o";
				txtIdNacionalidad.value=nacionalidad;
			}
			else
			{
				if(nacionalidad=="n")
				{
					nacionalidad="Nacionalizada/o";
					txtIdNacionalidad.value=nacionalidad;
				}
			}
		}
}

/*
txtIdEdad
txtIdSexo
txtIdEstadoCivil
txtIdSueldo
txtIdLegajo
txtIdNacionalidad
*/