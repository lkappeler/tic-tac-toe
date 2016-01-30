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

	var winRows = [
		// horizontal
		['one', 'two', 'three'], ['four', 'five', 'six'], ['seven', 'eight', 'nine'],
		// vertical
		['one', 'four', 'seven'], ['two', 'five', 'eight'], ['three', 'six', 'nine'],
		// diagonal
		['one', 'five', 'nine'], ['three', 'five', 'seven']
	];

	function checkWin() {
		for (var i in winRows) {
			var winRow = $scope.fields[winRows[i][0]] + $scope.fields[winRows[i][1]] + $scope.fields[winRows[i][2]];
			if (winRow === 'XXX' || winRow === 'OOO') {
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
	$scope.gameFinished = false;

	$scope.setField = function (fieldId) {

		if (!checkWin()) {
			$scope.fields[fieldId] = $scope.currentPlayer.symbol;
			if (checkWin()) {
				$scope.statusMessage = '<b>Finished</b>- Winner: ';
			} else if ($scope.round === 9) {
				$scope.statusMessage = 'Draw!';
			} else {
				togglePlayer();
				$scope.round++;
			}
		}

	};

	$scope.resetGame = function () {
		for (var field in $scope.fields) {
			$scope.fields[field] = '';
		}
		$scope.round = 1;
		$scope.currentPlayer = players[0];
	};

	// TODO: CSS

}]);

angular.module('tic-tac-toe.templates', []);
