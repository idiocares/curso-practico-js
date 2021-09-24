console.group("Cuadrados")

const ladoCuadrado=5;

console.log("lado cuadrado mide: cm "+ladoCuadrado);

const perimetroCuadrado=4*ladoCuadrado;

console.log("perimetro del cuadrado es cm: "+perimetroCuadrado);

const areaCuadrado=ladoCuadrado*ladoCuadrado;

console.log("el area del cuadrado es en cm2: "+areaCuadrado);

console.group("end");

//TRIANGULO
console.group("TRIANGULOS")
const ladoTriangulo1=6
const ladoTriangulo2=6
const base=4
const altura=5.5;

const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+base;

const areaTriangulo=(base*altura)/2;


console.log("los lados miden en cm:"+"lado1: "+ladoTriangulo1+" lado2: "+ladoTriangulo2+" base: "+base + "Altura: "+altura);
console.log("el perimetro del triangulo es en cm: "+perimetroTriangulo)
console.log("el area del triangulo es "+areaTriangulo)
console.group("END")

console.group("CIRCULOS")

const radio=4

const diametro=radio*2

const PI=Math.PI;

const perimetroCirculo=diametro*PI;

const areaCirculo=PI*(radio*radio);

console.log("radio del circulo es cm: "+radio)

console.log("diametro del circulo es en cm: "+diametro)

console.log("pi es "+PI);

console.log("el perimetro es en cm: "+perimetroCirculo);

console.log("el area del circulo es en cm2: "+areaCirculo);

console.group("END")


//ENCAPSULAMIENTOS CON FUNCIONES
