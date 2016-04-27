angular.module("app").controller("KmiloController",function($scope, CalculadoraService){

  $scope.nombrePersona="Kmilo"; // definición de dato
  $scope.num1=0;$scope.num2=0;$scope.resultado=0;

  $scope.escuela="";
  $scope.lista=[];

  $scope.variabledelServicio=CalculadoraService.nombreServicio1; 

  $scope.adicionar=function(){
    $scope.lista.push($scope.escuela);
  };


  $scope.suma = function(){
    $scope.resultado=$scope.num1 + $scope.num2;
  };

  $scope.sumarUsandoServicio=function(){
     $scope.resultado= CalculadoraService.sumar($scope.num1,$scope.num2 );
  }

  $scope.$watch("resultado", function(valornuevo, valorviejo){
      console.log("valor nuevo " + valornuevo);
      console.log("valor viejo " + valorviejo);
      $scope.num1=0;
      $scope.num2=0;
  });

  $scope.$watchCollection("lista",function(valornuevo,valorviejo){
    console.log("valor nuevo " + valornuevo);
    console.log("valor viejo " + valorviejo);
    $scope.nombrePersona = valornuevo[valornuevo.length-1];
  } );


});
