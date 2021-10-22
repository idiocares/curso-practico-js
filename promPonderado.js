 
//Funcion promedio ponderado 
//
//

const notas= [{course:"gimnasia",nota:10,credito:2,},{course:"informatica",nota:8,credito:5,},{curso:"matematica",nota:8,credito:3,}, ]

const notasCredito=notas.map(function(noteObject){

	return noteObject.nota*noteObject.credito;
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

    
         const int notasCred=sumaNotasCredito(notasCredito)

         const int sumaCredito=sumaCreditos(notas);

	 return double notasCredito/sumaCredito;


}
