/* Nuñez Jimena Soledad Div H
  P1 2018
  Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt 
y que muestre el perímetro por alert. */

function mostrar()
{
	var largoRectangulo;
	var anchoRectangulo;
	var perimetroRectangulo;

	largoRectangulo = prompt("Escriba el ancho del rectangulo ");
	anchoRectangulo = prompt("Escriba el largo del rectangulo");
	largoRectangulo = parseFloat(largoRectangulo);
	anchoRectangulo = parseFloat(anchoRectangulo);
	perimetroRectangulo = (largoRectangulo * 2) + (anchoRectangulo * 2);
	alert ("El perímetro del Rectangulo es " + perimetroRectangulo);


}
