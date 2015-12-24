var fidelityTest = angular.module('fidelityTest', ['formController']);

var formController = angular.module('formController', []);

formController.controller('formController', ['$scope', function ($scope) {
	$scope.master = {};

	$scope.exportedJSON = '';

	$scope.save = function(client) {
		$scope.master = angular.copy(client);
		
		console.log("The saved form data is: ", $scope.client);
		window.alert("Your application has been submitted.");
	};



}]);