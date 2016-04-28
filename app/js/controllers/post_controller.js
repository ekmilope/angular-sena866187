angular.module("app").controller("PostController",
  function($scope, PostService){
  $scope.resultado=[];

  $scope.listar = function(){
    PostService.listar().then(
      function exito(resp){
            console.log(resp);
             for(i=0; i<resp.data.length;i++){
               $scope.resultado.push(resp.data[i]);
             }

       },function err(resp){
            console.log("error " + resp)

      }
    );
  }

});
