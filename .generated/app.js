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
}]);

angular.module('tic-tac-toe.templates', []);
})(angular);
