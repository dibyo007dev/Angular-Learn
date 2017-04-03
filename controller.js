var app = angular.module('mainApp', []);

app.controller('people', function($scope, $http){
	$http.get('http://127.0.0.1/Angular-Learn/database.json');
}); 