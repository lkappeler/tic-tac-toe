(function (angular, undefined) {
'use strict';

function game($scope) {
	$scope.stuff = [1, 2, 3];

	$scope.greeting = 'Hola!';
}

angular.module('.game')
.controller('gameCtrl', ['$scope', game]);
})(angular);
