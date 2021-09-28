
console.group("CUADRADO")

function perimetroCuadrado(lado){
  return lado*4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.log(areaCuadrado(3))

console.group("END")

console.group("TRIANGULO")

function perimetroTriangulo(lado1,lado2,base){
  const valor=lado1 +lado2 + base;
  return valor;

}

function areaTriangulo(base,altura){

  return (base*altura)/2;

}

console.group("END");


console.group("CIRCULOS");

function perimetroCirc(radio){
   const diametro=radio*2;

  return diametro*Math.PI;

}

function areaCirc(radio){

  return Math.PI*(radio*radio);
}

console.group("END")


function calcularPerimetroCuadrado(){

 const input=document.getElementById("InputCuadrado");
 const valor=input.value;
 const perimetro=perimetroCuadrado(valor);
 alert(perimetro);

}

function calcularAreaCuadrado(){

  const input=document.getElementById("InputCuadrado");
  const value=input.value;

  const area=areaCuadrado(value);

  alert(area);
}

//CALCULO DEL AREA Y PERIMETRO DEL TRIANGULO

function calcularPerimetroTriangulo(){

  const input1=document.getElementById("InputTtriangulo")
  const input2=document.getElementById("InputTtriangulo2")
  const input3=document.getElementById("InputTtriangulo3")

  const lado1=parseInt(input1.value);
  const lado2=parseInt(input2.value);
  const  base=parseInt(input3.value);

  const perimetro=perimetroTriangulo(lado1,lado2,base)
    alert(perimetro);
}

function calcularAreaTriangulo(){
  const input3=document.getElementById("InputTtriangulo3")
  const input4=document.getElementById("InputTtriangulo4")

  const  base=parseInt(input3.value);
  const altura=parseInt(input4.value);

  const area=areaTriangulo(base,altura);
  alert(area);

}

//calculo Area y Perimetrod de un circulo

function calcularPerimetroCirculo(){

  const input=document.getElementById("inputCirculo")
  const radio=parseInt(input.value)

  const perimetro=perimetroCirc(radio)
  alert(perimetro)

}

function calcularAreaCirculo(){

  const input=document.getElementById("inputCirculo")
  const radio=parseInt(input.value)

  const area=areaCirc(radio);
  alert(area)
}
