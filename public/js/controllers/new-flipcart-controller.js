myApp.controller("BookCartCtrl", function($scope, $rootScope,kartService) {
	$rootScope.footerType = 'checkout-footer';
	$rootScope.headerType = 'main-header';
	// console.log("footerType",$rootScope.footerType);
	$scope.kart = kartService.getKart();
	$scope.length = $scope.kart.length;
	// console.log("length",$scope.length);
	/*$scope.add = function(book){
		kartService.addToKart(book);
		console.log("added");
	}*/ 
    // if($scope.check.$valid) {  
    //     alert("Form is Valid..!!");  
    //     }  
    //     else  
    //     {  
    //     alert("Form is not Valid..!!");  
    //     }  
    // }  
});

