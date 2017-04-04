var app = angular.module('mainApp', []);

app.controller('people', function($scope, $http){
	$http.get('http://127.0.0.1:8006/Angular-Learn/database.json')
	.then( function(response) {
		
		var data = response.records;
		$scope.persons = data;
		console.log(data);
	});
}); 