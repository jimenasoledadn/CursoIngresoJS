/*Nuñez Jimena Div H
Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe
	var descuento 

	importe = txtIdImporte.value;
	importe = parseInt(importe);
	descuento = importe - (importe * 0.25);

	txtIdResultado.value = descuento;
}

/*

txtIdImporte

txtIdResultado

*/