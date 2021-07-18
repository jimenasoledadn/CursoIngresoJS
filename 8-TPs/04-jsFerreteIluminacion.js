/*Nuñez Jimena Div H
       TP4 SWITCH e IF
   4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace 
un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos
 en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

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
  	total = cantidadLamparas*35;
  	importeFinal=txtIdprecioDescuento.value;

  	if(cantidadLamparas>=6)	









}




/*
{}
tp 4 SOLO IF (CREO QUE ME FALTO SUMAR INGRESO BRUTO-->MIRAR! y hacer
                por si compran 2 o 1 lampara )
Nuñez Jimena Div H
   4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace 
un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos
 en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 
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
 			else
 			{
 				txtIdprecioDescuento.value=total-(total*0.3);
 			}
 		}
 		else
 		{
 			if(cantidadLamparas==4)
 			{
 				if(nombreMarca=="ArgentinaLuz" || nombreMarca=="FelipeLamparas")
 				{
 					txtIdprecioDescuento.value=total-(total*0.25);
 				}
 				else
 				{
 					txtIdprecioDescuento.value=total-(total*0.20);
 				}
 			}
 			else
 			{
 				if(cantidadLamparas==3)
 				{
 					if(nombreMarca=="ArgentinaLuz")
 					{
 						txtIdprecioDescuento.value=total-(total*0.15);
 					}
 					else
 					{
 						if(nombreMarca=="FelipeLamparas")
 						{
 							txtIdprecioDescuento.value=total-(total*0.10);
 						}
 						else
 						{
 							txtIdprecioDescuento.value=total-(total*0.05);
 						}
 					}
 				}
 			}
 		}
 			
 	}
 	if(txtIdprecioDescuento.value>=120)
 	{
 		ingresosBrutos=importeFinal*0.10;
 		alert("Usted pago " + ingresosBrutos + " de IIBB");
 	}
 			
}

/*
{}
ME FALTO SUMAR EL INGRESO BRUTO

*/