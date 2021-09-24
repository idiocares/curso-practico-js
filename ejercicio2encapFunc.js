
console.group("CUADRADO")
function perimetroCuadrado(lado){
  return lado*4;
}

function areaCuadrado(lado){

  return lado*lado;

}

console.group("END")

console.group("TRIANGULO")

function perimetroTriangulo(lado1,lado2,base){

  return lado1+lado2+base;

}

function areaTriangulo(base,altura){

  return (base*altura)/2;

}

console.group("END");


console.group("CIRCULOS");

function perimetroCirc(diametro){

  return diametro*Math.PI;

}

function areaCirc(radio){

  return Math.PI*(radio*radio);
}
