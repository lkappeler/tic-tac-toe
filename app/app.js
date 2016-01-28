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

	var wins = [
		// horizontal
		['one', 'two', 'three'], ['four', 'five', 'six'], ['seven', 'eight', 'nine'],
		// vertical
		['one', 'four', 'seven'], ['two', 'five', 'eight'], ['three', 'six', 'nine'],
		// diagonal
		['one', 'five', 'nine'], ['three', 'five', 'seven']
	];

	function checkWin() {
		for (var p in wins) {
			var tmp = $scope.fields[wins[p][0]] + $scope.fields[wins[p][1]] + $scope.fields[wins[p][2]];
			if (tmp === 'XXX' || tmp === 'OOO') {
				return true;
			}
		}
		return false;
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
	$scope.round = 1;

	$scope.setField = function (fieldId) {

		if (!checkWin()) {
			$scope.fields[fieldId] = $scope.currentPlayer.symbol;
			if (checkWin()) {
				$scope.statusMessage = 'Finished - Winner: ';
			} else if ($scope.round === 9) {
				$scope.statusMessage = 'Draw!';
			} else {
				togglePlayer();
				$scope.round++;
			}
		}

	};

	// TODO: CSS

}]);

angular.module('tic-tac-toe.templates', []);
