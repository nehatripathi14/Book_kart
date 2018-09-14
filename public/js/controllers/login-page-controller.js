myApp.controller("LoginPageCtrl", function($scope, $rootScope){
	$rootScope.footerType = 'checkout-footer';
	$rootScope.headerType = 'checkout-header';
	$scope.submitted = "false";
	$scope.submit = function(userData){
		console.log(userData)
	}
})