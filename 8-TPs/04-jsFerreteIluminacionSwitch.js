function CalcularPrecio () 
{
  	var cantidadLamparas;
  	var nombreMarca;
  	var precioLampara;
  	var total;
  	var precioFinal;
  	var importeFinal;
  	var ingresosBrutos;


 	cantidadLamparas = txtIdCantidad.value;
 	cantidadLamparas = parseInt(cantidadLamparas);
 	nombreMarca = Marca.value;
 	total = 35 * cantidadLamparas;
 	importeFinal=txtIdprecioDescuento.value;

 	if(cantidadLamparas>=6)
 	{	
 		txtIdprecioDescuento.value = total*0.50;
 	}
 	else
 	{
 		if(cantidadLamparas==5)
 		{
 			if(nombreMarca=="ArgentinaLuz")
 			{
 				txtIdprecioDescuento.value = total-(total * 0.4);
 			}
 		}
 	}
}