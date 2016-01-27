angular.module('tic-tac-toe.routes')

.config([
	'$urlRouterProvider',
function ($urlRouterProvider) {
	'use strict';

	$urlRouterProvider.otherwise('/');
}]);
