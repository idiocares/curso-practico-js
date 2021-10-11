const precioOriginal=100

const descuento=15;

const porcentajePrecioConDescuentos=100 -descuento;

const precioConDescuento= (precioOriginal*porcentajePrecioConDescuentos)/100

//console.log({
  //precioOriginal,
  //descuento,
  //porcentajePrecioConDescuentos,
  //precioConDescuento,
//})


//FUNCION

function calcularPrecioDescuento(precio,descuento) {

  const porcentajePrecioConDescuentos=100 -descuento

  const precioDescuento= (precio*porcentajePrecioConDescuentos)/100

  return precioDescuento

}

function calcularElprecioConDiscout(){

  const input=document.getElementById("InputPrecio")

  const input2=document.getElementById("InputDiscount")

  const precio=parseInt(input.value)
  const discount=parseInt(input2.value)

  const valor = calcularPrecioDescuento(precio,discount)
  const resultado=document.getElementById("ResulP");

  ResulP.innerText="Precio con descuento es: $"+valor;


}
