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
	var precioUnitario;
	var cantidadLamparitas;
	var marcaDeLamparitas;
	var descuento;
	var totalLamparitas;
	var totalconDescuento;
	var iibb;
	var precioConDescyIIBB;

	cantidadLamparitas = txtIdCantidad.value;
	cantidadLamparitas = parseFloat(cantidadLamparitas);
	marcaDeLamparitas = Marca.value;
	totalLamparitas = cantidadLamparitas * 35;
	totalconDescuento = txtIdprecioDescuento.value;

	switch(cantidadLamparitas) 
	{
		case 1:
		case 2:				
		descuento = 0;
		break;
		case 3:
			if(marcaDeLamparitas=="ArgentinaLuz")
			{
				descuento = 0.15;
			}
			else
			{
				if(marcaDeLamparitas=="FelipeLamparas")
				{
					descuento = 0.10;
				}
				else
				{
					descuento = 0.05;
				}
			}
		break;
		case 4:
			if(marcaDeLamparitas=="ArgentinaLuz" || marcaDeLamparitas=="FelipeLamparas")
			{
				descuento = 0.25;
			}
			else
			{
				descuento = 0.20;
			}
		break;
		case 5:
			if(marcaDeLamparitas=="ArgentinaLuz")
			{
				descuento = 0.40;
			}
			else
			{
				descuento = 0.30;
			}
		break;
		default:
		{
			descuento = 0.50;
		}

	}

	totalconDescuento = totalLamparitas - (totalLamparitas*descuento);
	txtIdprecioDescuento.value = totalconDescuento;
	if(totalconDescuento>=120)
	{
		iibb = totalconDescuento*0.10;
		precioConDescyIIBB = totalconDescuento + (totalconDescuento*0.10);
		txtIdprecioDescuento.value = precioConDescyIIBB;
		alert("Usted pagó " + iibb + " de IIBB.");
	}


}


/*
{}


*/