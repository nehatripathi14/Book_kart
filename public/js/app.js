var myApp = angular.module("myApp", ["ngRoute", "ngAnimate", "ngMessages"]);
var quy=0;
myApp.run(function($rootScope) {
	$rootScope.footerType = 'main-footer';
	$rootScope.headerType = 'main-header';
});
myApp.config(function($routeProvider) {
	$routeProvider
		.when("/books", {
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrl"
		})
		.when("/kart", {
			templateUrl: "partials/kart-list.html",
			controller: "KartListCtrl"
		})
		.when("/Back To Store",{
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrl"
		})
		.when("/Remove",{
			templateUrl: "partials/kart-list.html",
			controller: "KartListCtrl"
		})
		.when("/Buy",{
			templateUrl: "partials/newflipcart.html",
			controller: "BookCartCtrl"
		})
		.when("/returnpolicy",{
			templateUrl: "partials/returnpolicy.html",
			controller: "ReturnPolicyCtrl"
		})
		.when("/placeorder",{
			templateUrl: "partials/login-page.html",
			controller: "LoginPageCtrl"
		})
		.otherwise({
		redirectTo: "/books"
	});
});
myApp.factory("kartService", function() {
	var kart = [];
	var sum = []; 
	return {
		getKart: function() {
			return kart;
		},
		getTotalAmount: function() {
			return sum;
		},
		removeKart: function(index){
			kart.splice(index);
			// console.log("removeCart",kart);
		},
// -------------------------ADD TO CART------------------
		addToKart: function(book) {
			book.isDisabled = true;
			kart.push(book);
			// console.log(kart);
			/*console.log(kart);
			var amount = 0 ; 
        	for(var i=0;i<=kart.length - 1;i++){
		    amount = kart[i].price +amount;
            }
            sum.push(amount);
            quy = quy + 1;
            console.log("this is added",quy);*/
		},
		/*buy: function(book) {
			kart.push(book);
			alert("Thanks for buying: ", book.name);
		}*/
	}
	 // console.log("addToKart",kart);
});
/*--------------------------------------SERVICES START----------------------------------
myApp.factory("bookService", function() {
	var books = [
		{
			imgUrl: "adultery.jpeg",
			name: "Adultery",
			price: 205,
			rating: 4,
			binding: "Paperback",
			publisher: "Random House India",
			releaseDate: "12-08-2014",
			details: "Linda, in her thirties, begins to question the routine and predictability of her days. In everybodys eyes, she has a perfect life-happy marriage, children and a career. Yet what she feels is an eno... <a href='#'>View More<a>"
		},
		{
			imgUrl: "geronimo.jpeg",
			name: "Geronimo Stilton Spacemice#2 : You're Mine, Captain!",
			price: 168,
			rating: 5,
			isDisabled:false,
			binding: "Paperback",
			publisher: "Scholastic",
			releaseDate: "01-07-2014",
			details: "Geronimo Stilton meets outer space in this cosmically fun spin-off series!Meet Geronimo StiltonixHe is a spacemouse - the Geronimo Stilton of a parallel universe! He is captain of the spaceship Mou... View More"
		},
		{
			imgUrl: "life-or-death.jpeg",
			name: "Life or Death",
			price: 339,
			id:1,
			isDisabled:false,
			rating: 4,
			binding: "Paperback",
			publisher: "Hachette India",
			releaseDate: "01-04-2014",
			details: "Why would a man escape from prison the day before he's due to be released? Audie Palmer has spent a decade in prison for an armed robbery in which four people died, including two of his gang. Five... View More"
		},
		{
			imgUrl: "playing.jpeg",
			name: "Playing It My Way : My Autobiography",
			price: 599,
			id:2,
			isDisabled:false,
			rating: 5,
			binding: "Hardcover",
			publisher: "Hodder & Stoughton",
			releaseDate: "01-08-2014",
			details: "I knew that if I agreed to write my story, I would have to be completely honest, as thats the way I have always played the game and that would mean talking about a number of things I have not addr... View More"
		},
		{
			imgUrl: "the-fault.jpeg",
			name: "The Fault in Our Stars",
			price: 227,
			id:3,
			isDisabled:false,
			rating: 4.5,
			binding: "Paperback",
			publisher: "Penguin Books Ltd",
			releaseDate: "25-01-2013",
			details: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist n... View More"
		},
		{
			imgUrl: "wings-of-fire.jpeg",
			name: "Wings of Fire: An Autobiography",
			price: 124,
			id:4,
			isDisabled:false,
			rating: 5,
			binding: "Paperback",
			publisher: "Universities Press",
			releaseDate: "25-08-2000",
			details: "Wings of Fire traces the life and times of India's former president A.P.J. Abdul Kalam. It gives a glimpse of his childhood as well as his growth as India's Missile Man. Summary of the Book Wings... View More"
		}
	];
	return {
		getBooks: function() {
			return books;
		},
		addToKart: function(book) {
			return books;

		} 
	}
}); 
---------------------------------- SERVICE ENDS --------------------------------------*/
/* ---------------------------------------- CONTROLLERS START ---------------------------

myApp.controller("KartListCtrl", function($scope, kartService) {
	$scope.kart = kartService.getKart();
	//for loop on kart
	//define new array
	//push in new array if not duplicate
	$scope.removeKart = function(val){
		console.log("val",val);
		$scope.val = val;
		$scope.kart.splice($scope.val, 1);
		console.log("buy",JSON.stringify($scope.kart));
		quy=quy-1;
		console.log("this is remove",quy);
	} 
	$scope.quy=1;
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
myApp.controller("HeaderCtrl", function($scope) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKart";
	$scope.appDetails.tagline = "We have collection of 1 Million books";
});
myApp.controller("BookListCtrl", function($scope, bookService, kartService) {
	$scope.books = bookService.getBooks();
	$scope.isDisabled = false;
	// $scope.book = bookService.removeBooks()
	// $scope.book1 =[];
	$scope.addToKart = function(book) {
		kartService.addToKart(book);
		// $scope.isDisabled = true;
		// $scope.book1.push(book);
	}
});
myApp.controller("PurchaseListCtrl", function($scope,kartService) {
	$scope.kart = kartService.getKart();
	$scope.add = function(book){
		 kartService.addToKart(book);
		 console.log("added");
	}
	$scope.cost = kartService.getTotalAmount();
	$scope.total = $scope.cost[$scope.cost.length - 1];
	$scope.removeKart = function(val,price){
		$scope.kart.splice(val,1);
		$scope.total = $scope.total-price;
		quy = quy -1;
		console.log("this is remove cart",quy);
		// kartService.removeKart($scope.val);
	} 
	console.log("this is count",quy);
	$scope.quy=1;
	$scope.plus=function(ccc){
		$scope.ccc=ccc;
		// console.log($scope.kart[$scope.ccc]);
		$scope.kart[$scope.ccc].quy=$scope.kart[$scope.ccc].quy+1;
		// $scope.kart[ccc].price=$scope.kart[ccc].price+;
	
	}
	$scope.plus=function(ccc){
		$scope.kart[ccc].quy=$scope.kart[ccc].quy-1;
		
	}
	
	// $scope.total = $scope.cost[$scope.removeKart];
	// console.log("this is cost length",$scope.cost.length);
	// console.log("this is cost",$scope.total);
});
----------------------------------------------CONTROLLERS ENDS-----------------------*/

