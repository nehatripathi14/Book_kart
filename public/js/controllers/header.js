// var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);
myApp.controller("HeaderCtrl", function($scope) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKart";
	$scope.appDetails.tagline = "We have collection of 1 Million books";
});