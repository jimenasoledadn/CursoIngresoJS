/* Nuñez, Jimena Div H
		Parcial 2020 pto 2 

Realizar el algoritmo que permita ingresar los datos de una compra productos
 de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */
function mostrar()
{
	var seguir;
	var productoIngresado;
	var arena;
	var cal;
	var cemento;
	var cantDeBolsasArena;
	var cantDeBolsasCal;
	var cantDeBolsasCemento;
	var totalDeBolsas;
	var precioPorBolsa;
	var totalaPagar;
	var totalConDescuento;
	var mayorCantidadDeBolsas;

	 //ver si es necesario inicializar
	mayorCantidadDeBolsas=0;
	banderaBolsas=true;
	seguir=true;

	while(seguir==true)
	{
		productoIngresado=prompt("Ingrese un producto arena, cal ó cemento: ");
		while(productoIngresado!="arena" && productoIngresado!="cal" && productoIngresado!="cemento")
		{
			productoIngresado=prompt("Inválido, ingrese uno de éstos productos: arena, cal ó cemento.");
		}

		switch(productoIngresado)
		{
			case "arena":
				cantDeBolsasArena=prompt("Cuántas bolsas de arena?: ");
				cantDeBolsasArena=parseInt(cantDeBolsasArena);
				cantDeBolsasArena++;
				break;
			case "cal":
				cantDeBolsasCal=prompt("Cuántas bolsas de cal?: ");
				cantDeBolsasCal=parseInt(cantDeBolsasCal);
				cantDeBolsasCal++;
				break;
			case "cemento":
				cantDeBolsasCemento=prompt("Cuántas bolsas de cemento?: ");
				cantDeBolsasCemento=parseInt(cantDeBolsasCemento);
				cantDeBolsasCemento++;
		}
	seguir=confirm("Desea ingresar otro producto: ");	
	}
	alert(cantDeBolsasArena + cantDeBolsasCemento);


}
