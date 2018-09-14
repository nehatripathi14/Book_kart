myApp.controller("BookListCtrl", function($scope, $rootScope, bookService, kartService) {
	$rootScope.footerType = 'main-footer';
	$rootScope.headerType = 'main-header';
	$scope.books = bookService.getBooks();
	// $scope.book = bookService.removeBooks()
	// $scope.book1 =[];
	$scope.addToKart = function(book) {
		kartService.addToKart(book);
		// console.log(isDisabled);
		// $scope.book1.push(book);
	}
})