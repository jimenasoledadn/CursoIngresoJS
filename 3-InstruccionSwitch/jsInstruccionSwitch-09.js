/* Nuñez, Jimena Div H
    switch 09
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia 
	como base, se pide el ingreso de una estacion del año y localidad para vacacionar 
	para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento 
	del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento 
	del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento
 	del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */
function mostrar()
{
	var estacionIngresada; 
	var destinoIngresado;
	var cantidadIngresada;
	var estadiaBase;
	var montoTotal;
	estacionIngresada=txtIdEstacion.value;
	destinoIngresado=txtIdDestino.value;
	
	estadiaBase=15000;
	estadiaBase=parseInt(estadiaBase);

	switch(estacionIngresada)
	{
		case "Invierno":
		case "Bariloche":
			montoTotal=estadiaBase+(estadiaBase*0.20);
			montoTotal=parseInt(montoTotal);
			alert(montoTotal);
			break;
		case "Invierno":
		case "Cataratas":
		case "Cordoba":
			montoTotal=estadiaBase-(estadiaBase*0.10);
			alert(montoTotal);
			break;
		case "Invierno":
		case "Mar del plata":
			montoTotal=estadiaBase-(estadiaBase*0.20);
			montoTotal=parseInt(montoTotal);
			alert(montoTotal);
			break;
		case "Verano":
		case "Bariloche":
			montoTotal=estadiaBase-(estadiaBase*0.20);
			montoTotal=parseInt(montoTotal);
			alert(montoTotal);
			break;
		case "Verano":
		case "Cataratas":
		case "Cordoba":
			montoTotal=estadiaBase+(estadiaBase*0.10);
			montoTotal=parseInt(montoTotal);
			alert(montoTotal);
			break;
		case "Verano":
		case "Mar del plata":
			montoTotal= estadiaBase+(estadiaBase*0.20);
			alert(montoTotal);
			break;
		case "Otoño":
		case "Primavera":
		case "Bariloche":
			montoTotal= estadiaBase+(estadiaBase*0.10);
			montoTotal=parseInt(montoTotal);
			alert(montoTotal);
			break;
		case "Otoño":
		case "Primavera":
		case "Cataratas":
			montoTotal= estadiaBase+(estadiaBase*0.10);
			montoTotal=parseInt(montoTotal);
			alert(montoTotal);
			break;
		case "Otoño":
		case "Primavera":
		case "Mar del plata":
			montoTotal= estadiaBase+(estadiaBase*0.10);
			montoTotal=parseInt(montoTotal);
			alert(montoTotal);
			break;
		case "Otoño":
		case "Primavera":
		case "Cordoba":
			alert(estadiaBase);
		break;
	}


}//FIN DE LA FUNCIÓN
/*
Invierno
Verano
Otoño
Primavera

Bariloche
Cataratas
Mar del plata
Cordoba */