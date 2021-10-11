const coupons =["juanDc_es_batman","pero_no_le_digas_a_nadie","es_un_secreto"];

function onclickButtonPriceDiscount(){

  const inputPrice=document.getElementById("InputPrecio");

  const priceValue=parseInt(inputPrice.value);

  const inputCoupon=document.getElementById("inputCoupon");
  const couponValue=inputCoupon.value;

  const descuento=0;

  switch (couponValue) {
    case coupons[0]:

       descuento=15;

      break;
      case coupons[1]:

          descuento=30;

        break;

        case coupons[2]:

        descuento=25;

          break;


  }

  const precioConDescuento= calcularPrecioDescuento(priceValue,descuento);

  const resultIp=document.getElementById("ResulP")
  ResulP.innerText="el precio con descuento es $"+precioConDescuento;
}

function calcularPrecioDescuento(precio,descuento) {

  const porcentajePrecioConDescuentos=100 -descuento

  const precioDescuento= (precio*porcentajePrecioConDescuentos)/100

  return precioDescuento

}
