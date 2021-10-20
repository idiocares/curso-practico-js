
const lista=[1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
];

function calcularModa(lista){

  const listaCount={};
  lista.map(function(elto){
   
    if(listacount[elto]){

     listacount[elto]=listaCount[elto]+1

     }
    else{
     
     listaCount[elto]=1

     }	  

  })	
  const listaArr=Object.entries(listaCount).sort(function(acum,nvoValor){

     return acum[1]-nvoValo[1];
  })

  const moda=listaArr[listaArr.length-1];	

}

///CODIGO ANTERIOR PARA CALCULAR LA MODA 

const listaCount={}
lista.map(function(elto){

  if(listaCount[elto]){

  listaCount[elto]=listaCount[elto]+1;

  }
  else{
    listaCount[elto]=1;
  }


});

const listaArr=Object.entries(listaCount).sort(function(acum,nvoValor){

  return acum[1]-nvoValor[1]
})

const moda=listaArr[listaArr.length-1]
