
//Funcion promedio ponderado 
//
//

const notas= [{course:"gimnasia",nota:10,credito:2,},{course:"informatica",nota:8,credito:5,},{curso:"matematica",nota:8,credito:3,}, ]

const notasCredito=notas.map(function(noteObject){

	return notesObject.nota*notesObject.credito;
})


function sumaNotasCredito(notasCredito){

        let acum=0;

	for (i=0;i<notasCredito.length;i++){

             acum=acum+notasCredito[i];
	
	}

	return acum

}

function sumaCreditos(notas){

        let suma=0;
	
	for (i=0;i<notas.length;i++){

            suma=suma + notas.credito;

	}

	return suma

   	
}


function promedioPonderado(notas,notasCredito){

    
         const notasCred=sumaNotasCredito(notasCredito)

         const sumaCredito=sumaCreditos(notas);

	 return notasCredito/sumaCredito;


}
