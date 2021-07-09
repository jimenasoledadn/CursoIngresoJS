/*Nuñez, Jimena Div H
Parcial 2019 dos.js
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje
 " ustedes se llaman xxxxx y xxxx
  pesan xx y xx kilos, 
  que sumados son xx kilos 
  y el promedio de peso xx ".
 */

function mostrar()
{
   var parejaUno
   var parejaDos
   var pesoUno
   var pesoDos
   var nombres
   var pesoUno
   var pesoDos
   var suma
   var promedio

   nombres = prompt ("Escriban el nombre de cada uno ");
   pesoUno = prompt ("Indique el peso de el ");
   pesoDos = prompt ("Indique el peso de ella ");
   pesoUno = parseInt (pesoUno);
   pesoDos = parseInt (pesoDos);
   suma = pesoUno + pesoDos;
   promedio = (suma / 2);
   alert ("Ustedes se llaman " + nombres + " y pesan " + pesoUno + " y " + pesoDos + " kilos, que sumados son " + suma + " kilos " + " y el promedio de peso es " + promedio);





}
