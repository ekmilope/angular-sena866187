angular.module("app").factory("PostService",function($http){

  var listar = function(){
//  return $http.get('http://jsonplaceholder.typicode.com/posts');
   return  $http({
      url:'http://jsonplaceholder.typicode.com/posts',
      method : 'GET'
    });

  }

  return{ listar : listar }


}  );
