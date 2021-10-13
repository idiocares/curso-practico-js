const lista1=[500,200,300,100]




function calcularMediaAritmetica(lista){

  //let sumaLista1=0;

  //for (let i=0;i<lista.length;i++){

    //sumaLista1 =lista[i] + sumaLista1
  //}

  const sumalista=lista.reduce(
    function(valorAcum=0,nuevoElem){
      return valorAcum +nuevoElem;
    }

  )

  const promedioLista1=sumaLista1/lista.length;

  return promedioLista1

}
