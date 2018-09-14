myApp.controller("KartListCtrl", function($scope, $rootScope, kartService) {
	$rootScope.footerType = 'main-footer';
	$rootScope.headerType = 'main-header';
	$scope.kart = kartService.getKart();
	// $scope.name= {};
	// $scope.name = "neha";  
	$scope.total = 0;
	$scope.remove = function(val, product) {
    if(product.qty > 0) {
      product.qty--;
      $scope.kart.splice(val,1);
      $rootScope.$broadcast('remove', product.price);
    }
  }
	// Catch the event to remove
  $scope.$on('remove', function(event, data) {
    $scope.total -= data;   
  });
	$scope.plus=function(ccc){
		$scope.ccc=ccc;
		// console.log($scope.kart[$scope.ccc]);
		$scope.kart[$scope.ccc].quy=$scope.kart[$scope.ccc].quy+1;
		// $scope.kart[ccc].price=$scope.kart[ccc].price+;
	}
	$scope.plus=function(ccc){
		$scope.kart[ccc].quy=$scope.kart[ccc].quy-1;
	}
	$scope.buy = function(book) {
		// console.log("buy",book);
		kartService.buy(book);
	}
});