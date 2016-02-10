function MainController($scope) {
	$scope.name = 'Bill Gates';
	$scope.email = 'bill@microsoft.com';
	$scope.phone = '01234567890';
}

angular
	.module('app')
	.controller('MainController', MainController);