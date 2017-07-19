var app = angular.module('myApp', [])

app.controller('expCtrl', function($scope) {
    $scope.exps = experienceList;
});

app.controller('chinaCtrl', function($scope){
	$scope.ctrips = tripChina;
});

app.controller('usaCtrl', function($scope){
	$scope.udaytrips = oneDay;
	$scope.udaystrips = multipleDay;
	$scope.uevents = events;
});