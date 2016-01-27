(function (angular, undefined) {
angular.module('tic-tac-toe.routes')

.config([
	'$urlRouterProvider',
function ($urlRouterProvider) {
	'use strict';

	$urlRouterProvider.otherwise('/');
}]);
})(angular);
