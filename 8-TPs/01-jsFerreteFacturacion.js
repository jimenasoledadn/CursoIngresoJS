/*1. Nuñez Jimena Div H
     TP 1 FERRETE FACTURACION.JS	

         Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno; 
	var precioDos; 
	var precioTres; 
	var suma;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);
	suma = precioUno + precioDos + precioTres;
	alert ("La suma de los mismos es " + suma.toFixed(2));

}
function Promedio () 
{
	var precioUno; 
	var precioDos; 
	var precioTres; 
	var promedio;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);
	promedio = ((precioUno + precioDos + precioTres) / 3);
	alert ("El promedio de los tres es " + promedio.toFixed(2));
	
}
function PrecioFinal () 
{
	var precioUno; 
	var precioDos; 
	var precioTres; 
	var suma;
	var iva;
	var precioFinal;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);
	suma = precioUno + precioDos + precioTres;
	iva = (suma * 21)/100;
	precioFinal = suma + iva;
	alert ("El precio Final más IVA es " + precioFinal.toFixed(2));

	
}

/* txtIdPrecioUno
   txtIdPrecioDos
   txtIdPrecioTres */