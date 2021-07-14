
/*Nuñez Jimena Div H
    if 10
  Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
     "EXCELENTE" para notas igual a 9 o 10,
      "APROBÓ" para notas mayores a 4,
     "Vamos, la proxima se puede" para notas menores a 4 */

function mostrar()
{
	var notaExamen;

	notaExamen = Math.floor(Math.random() * 10) + 1;

	if(notaExamen>8)
	{
		alert("EXCELENTE");
	}

	else 
		if(notaExamen>3 && notaExamen<9)
		{
		alert("APROBÓ");
	    }
	    else
	    {
		alert ("Vamos, la próxima se puede");
	    }
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN

/*
{ MAL HECHO, porque el else es SOLO para el ultimo if !!!
	var notaExamen;

	notaExamen = Math.floor(Math.random() * 10) + 1;

	if(notaExamen>8)
	{
		alert("EXCELENTE");
	}

	if(notaExamen>3 && notaExamen<9)
	{
		alert("APROBÓ");
	}
	else
	{
		alert ("Vamos, la próxima se puede");
	}
	//Genero el número RANDOM entre 1 y 10 
} */
