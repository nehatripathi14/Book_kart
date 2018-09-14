myApp.controller("PurchaseListCtrl", function($scope,$rootScope,kartService) {
	$scope.total = 0;
	$scope.kart = kartService.getKart();
	$scope.cost = kartService.getTotalAmount();
	$scope.total = $scope.cost[$scope.cost.length - 1];
	$scope.plus=function(ccc){
		$scope.ccc=ccc;
		$scope.kart[$scope.ccc].quy=$scope.kart[$scope.ccc].quy+1;
	}
	$scope.minus=function(ccc){
		$scope.kart[ccc].quy=$scope.kart[ccc].quy-1;
	}
	$scope.add = function(product) {
    kartService.addToKart(product);
    product.qty++;
    $rootScope.$broadcast('add', product.price);
  }

  // Fire event to remove
  $scope.remove = function(val, product) {
    if(product.qty > 0) {
        product.qty--;
        $scope.kart.splice(val,1);
        $rootScope.$broadcast('remove', product.price);
    }
  }

  // Catch the event to add
  $scope.$on('add', function(event, data) {
    $scope.total += data;
  });
  
  // Catch the event to remove
  $scope.$on('remove', function(event, data) {
    $scope.total -= data;   
  });
});
