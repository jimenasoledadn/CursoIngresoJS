/*2.	
         Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho 
de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var anchoTerreno
	var largoTerreno
	var perimetroRectangulo
	var alambreAcomprar

	anchoTerreno = txtIdLargo.value;
	largoTerreno = txtIdAncho.value;
	anchoTerreno = parseFloat(anchoTerreno);
	largoTerreno = parseFloat(largoTerreno);
	perimetroRectangulo = (anchoTerreno + largoTerreno) * 2;
	alambreAcomprar = perimetroRectangulo * 3;
	alert (alambreAcomprar);
}
function Circulo () 
{
	var radio
	var valordePi
	var perimetroCircular
// perimetro: 2*(pi*r)//
	radio = txtIdRadio.value;
	radio = parseFloat (radio);
	valordePi = Math.PI;
	valordePi = parseFloat (valordePi);
	perimetroCircular = 2 * (radio * valordePi);
	alert(perimetroCircular);

	
}
function Materiales () 
{
// Para terreno rectangular: //
	var anchoTerreno;
	var largoTerreno;
	var areaTerreno;
	var cementoNecesarioRectangulo;
	var calNecesarioRectangulo;
	
	anchoTerreno = txtIdLargo.value;
	largoTerreno = txtIdAncho.value;
	anchoTerreno = parseFloat(anchoTerreno);
	largoTerreno = parseFloat(largoTerreno);
	areaTerreno = anchoTerreno * largoTerreno;
	cementoNecesarioRectangulo = 2 * areaTerreno;
	calNecesarioRectangulo = 3 * areaTerreno;
	alert (cementoNecesarioRectangulo.toFixed(2) + " bolsas de cemento y " + calNecesarioRectangulo + " bolsas de cal");





    




	
}


/*

txtIdLargo
txtIdAncho
txtIdRadio

*/