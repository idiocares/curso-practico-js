const lista=[100 , 200 , 300,40000]

function calculoMediana(lista){
  const listaOrdenada=lista.sort((a,b)=>a-b);
  
  const mitadLista1=parseInt(lista.length/2) ;
  
  let mediana;

  if  (esPar(lista.length)){

   const elto1=lista[mitadLista1];
   const elto2=lista[mitadLista1-1];

   const promedioMediana=calcularMediaAritmetica([elto1,elto2])

   mediana=promedioMediana;

  }
  else {
    mediana=lista[mitadLista1]
  }


}



function esPar(num){

  if (num %2===0){
    return true;
  }
  else {
    return false;
  }
}



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
