'use strict';

var Router = function ($routeProvider) {

	$routeProvider.when('/users/:userId', {
		templateUrl: './views/profileTmpl.html',
		controller: 'ProfileCtrl'
	})
	.otherwise({
		redirectTo: '/users/0'
	});

}

module.exports = Router;