(function (angular, undefined) {
'use strict';

angular.module('tic-tac-toe', [
	'ngSanitize',
	'tic-tac-toe.routes'
])

.run([
	'$rootScope',
	'$http',
function ($scope, $http) {

	// Expose app version info
	$http.get('version.json').success(function (v) {
		$scope.version = v.version;
		$scope.appName = v.name;
	});

	var players = [
		{
			name: 'Player X',
			symbol: 'X'
		},
		{
			name: 'Player O',
			symbol: 'O'
		}
	];

	function togglePlayer() {
		if ($scope.currentPlayer === players[0]) {
			$scope.currentPlayer = players[1];
		} else {
			$scope.currentPlayer = players[0];
		}
	}

	$scope.fields = {
		one: '',
		two: '',
		three: '',
		four: '',
		five: '',
		six: '',
		seven: '',
		eight: '',
		nine: ''
	};

	$scope.currentPlayer = players[0];
	$scope.statusMessage = 'Currently playing: ';

	$scope.setField = function (fieldId) {
		$scope.fields[fieldId] = $scope.currentPlayer.symbol;
		togglePlayer();
	};

	// TODO: Check for winner
	// TODO: CSS

}]);

angular.module('tic-tac-toe.templates', []);
})(angular);
