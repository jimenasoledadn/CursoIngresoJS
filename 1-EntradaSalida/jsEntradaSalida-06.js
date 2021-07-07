/*Nuñez, Jimena Div H
Ejercicio 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno
	var otroNumero
	var suma

	numeroUno = txtIdNumeroUno.value;
	otroNumero = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	otroNumero = parseInt(otroNumero);
	suma = numeroUno + otroNumero;
	alert("El resultado es: " + suma);
}

