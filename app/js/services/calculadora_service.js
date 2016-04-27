angular.module("app").factory("CalculadoraService",function(){

  var nombreServicio = "yo soy una calculadora";
  var nombreServicio1 = "yo";
  var sumar=function(a,b){
    console.log("recibo parametros " + a +" "+b);
    return a+b;
  };

  return{
    nombreServicio:nombreServicio, sumar:sumar, nombreServicio1:nombreServicio1
  }



} );
