/* Nuñez, Jimena Div H
  p1018 03
  Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/

function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio = prompt ("Escriba el precio: ");
	precio = parseFloat (precio);
	descuento = prompt ("Indique el porcentaje de descuento");
	descuento = parseFloat (descuento);
	precioFinal = precio - (precio * descuento / 100);
	elPrecioFinal.value = precioFinal;



}
// elPrecioFinal //