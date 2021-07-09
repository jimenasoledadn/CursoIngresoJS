/*Nuñez Jimena Div H
Ejercicio 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe
	var descuento 
	// var resultado//

	importe = txtIdImporte.value;
	importe = parseInt(importe);
	descuentocliente = prompt ("aplique descuento en porcentaje: ");
	//descuentocliente = parseInt(descuentocliente) //
	descuento = importe - (importe * (descuentocliente / 100) );
	/* SE PUEDE DESGLOZAR, 
	descuento = importe * descuento / 100;
	resultado = importe - descuento; 

	O TAMBIÉN 
	resultado = importe * 0.75 */

	txtIdResultado.value = descuento;
}

/*
1er ejercicio 10

	var importe
	var descuento 

	importe = txtIdImporte.value;
	importe = parseInt(importe);
	descuento = importe - (importe * 0.25);

	txtIdResultado.value = descuento;

*/