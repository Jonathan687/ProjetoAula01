// This is a JavaScript file

$(document).on("click","#somar",function()[
  var valor1 = $("#valor1").var();
  var valor2 = $("#valor2").var();
  var resultado = parseFloat(valor1) + parseFloat(valor2);
  $("#resultado").var(resultado);
]);

$(document).on("click","#subtrair",function(){
  var valor1 = $("$valor1").var();
  var valor2 = $("$valor2").var();
  var resultado = parseFloat(valor1) - parseFloat(valor2);
  $("#resultado").var(resultado);
]);

$(document).on("click","#multiplicar",function(){
  var valor1 = $("$valor1").var();
  var valor2 = $("$valor2").var();
  var resultado = parseFloat(valor1) * parseFloat(valor2);
  $("resultado").var(resultado);
]);

$(document).on("click","#dividir",function(){
  var valor1 = $("$valor1").var();
  var valor2 = $("$valor2").var();
  var resultado = parseFloat(valor1) / parseFloat(valor2);
  $("#resultado").var(resultado);
]);
